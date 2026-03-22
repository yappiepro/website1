import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import webPush from 'npm:web-push@3.6.7'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, content-type',
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { title, body, url, image } = await req.json()

    // VAPID keys from env
    const vapidPublicKey = Deno.env.get('VAPID_PUBLIC_KEY')
    const vapidPrivateKey = Deno.env.get('VAPID_PRIVATE_KEY')
    const vapidSubject = Deno.env.get('VAPID_SUBJECT') || 'mailto:admin@artemselifanov.ru'

    // Setup web-push
    webPush.setVapidDetails(vapidSubject, vapidPublicKey, vapidPrivateKey)

    // Get all subscriptions from Supabase
    const supabaseUrl = Deno.env.get('SUPABASE_URL') || ''
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || ''
    
    const response = await fetch(`${supabaseUrl}/rest/v1/push_subscriptions?select=endpoint,p256dh,auth`, {
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Prefer': 'resolution=ignore-duplicates'
      }
    })

    const { data: subscriptions } = await response.json()

    if (!subscriptions || subscriptions.length === 0) {
      return new Response(
        JSON.stringify({ success: true, message: 'No subscriptions found', sent: 0 }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
      )
    }

    const payload = JSON.stringify({
      title,
      body,
      data: { url },
      icon: '/favicons/android-chrome-192x192.png',
      badge: '/favicons/android-chrome-192x192.png',
      image
    })

    let successCount = 0
    let failCount = 0
    const errors: any[] = []

    // Send to each subscription
    for (const sub of subscriptions) {
      const subscription = {
        endpoint: sub.endpoint,
        keys: {
          p256dh: sub.p256dh,
          auth: sub.auth
        }
      }

      try {
        await webPush.sendNotification(subscription, payload)
        successCount++
      } catch (error: any) {
        if (error.statusCode === 410) {
          // Subscription expired - remove from database
          await fetch(`${supabaseUrl}/rest/v1/push_subscriptions?endpoint=eq.${sub.endpoint}`, {
            method: 'DELETE',
            headers: {
              'apikey': supabaseKey,
              'Authorization': `Bearer ${supabaseKey}`
            }
          })
          console.log(`Removed expired subscription: ${sub.endpoint}`)
        } else {
          console.error(`Error sending to ${sub.endpoint}:`, error.message)
          errors.push({ endpoint: sub.endpoint, error: error.message })
        }
        failCount++
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: `Sent to ${successCount} subscribers`,
        sent: successCount,
        failed: failCount,
        errors
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    )

  } catch (error) {
    console.error('Error sending push:', error)
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
  }
})
