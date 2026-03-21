const functions = require('firebase-functions')
const admin = require('firebase-admin')
const webpush = require('web-push')

admin.initializeApp()
const db = admin.firestore()

const config = functions.config()
const VAPID_PUBLIC_KEY = config?.webpush?.public_key
const VAPID_PRIVATE_KEY = config?.webpush?.private_key
const VAPID_SUBJECT = config?.webpush?.subject || 'mailto:admin@artemselifanov.ru'
const PUSH_API_KEY = config?.webpush?.api_key

if (VAPID_PUBLIC_KEY && VAPID_PRIVATE_KEY) {
  webpush.setVapidDetails(VAPID_SUBJECT, VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY)
}

function buildPayload(body = {}) {
  const title = body.title || 'Уведомление'
  const payload = {
    title,
    body: body.body || '',
    image: body.image,
    data: {
      url: body.url || '/',
      type: body.type || 'default'
    }
  }
  return JSON.stringify(payload)
}

exports.sendPushToAll = functions.https.onRequest(async (req, res) => {
  try {
    if (req.method !== 'POST') {
      return res.status(405).send('Use POST')
    }

    if (!VAPID_PUBLIC_KEY || !VAPID_PRIVATE_KEY) {
      return res.status(500).json({ error: 'VAPID keys not configured' })
    }

    if (PUSH_API_KEY) {
      const key = req.get('x-api-key') || req.query.key
      if (key !== PUSH_API_KEY) {
        return res.status(403).json({ error: 'Unauthorized' })
      }
    }

    const payload = buildPayload(req.body || {})

    const snapshot = await db.collection('push_subscriptions').get()
    const subscriptions = snapshot.docs.map(d => ({ id: d.id, ...d.data() }))

    const results = await Promise.allSettled(
      subscriptions.map(async (sub) => {
        const subscription = {
          endpoint: sub.endpoint,
          expirationTime: sub.expirationTime || null,
          keys: sub.keys || {}
        }

        try {
          await webpush.sendNotification(subscription, payload)
          return { id: sub.id, ok: true }
        } catch (err) {
          const statusCode = err.statusCode || err.status || 0
          if (statusCode === 404 || statusCode === 410) {
            await db.collection('push_subscriptions').doc(sub.id).delete()
          }
          return { id: sub.id, ok: false, statusCode }
        }
      })
    )

    const ok = results.filter(r => r.status === 'fulfilled' && r.value?.ok).length
    const failed = results.length - ok

    return res.json({ ok, failed, total: results.length })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Internal error' })
  }
})
