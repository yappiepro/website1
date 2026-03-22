#!/usr/bin/env node
/**
 * Скрипт для деплоя Supabase Edge Function через API
 */

import dotenv from 'dotenv'
import fetch from 'node-fetch'
import { readFileSync } from 'fs'

dotenv.config()

const SUPABASE_PROJECT_ID = 'famxhijlisxdsggevcqi'
const SUPABASE_ACCESS_TOKEN = process.env.SUPABASE_ACCESS_TOKEN

if (!SUPABASE_ACCESS_TOKEN) {
  console.error('❌ SUPABASE_ACCESS_TOKEN not found in .env')
  console.error('Add your Supabase access token: SUPABASE_ACCESS_TOKEN=your_token_here')
  process.exit(1)
}

async function main() {
  console.log('🚀 Deploying send-push function to Supabase...\n')

  // Read function code
  const functionCode = readFileSync('./supabase/functions/send-push/index.ts', 'utf-8')

  // Deploy function
  const response = await fetch(
    `https://api.supabase.com/functions/v1/${SUPABASE_PROJECT_ID}/send-push`,
    {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${SUPABASE_ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        function: functionCode,
        verify_jwt: false
      })
    }
  )

  if (response.ok) {
    console.log('✅ Function deployed successfully!')
    console.log('\n📤 Send test push:')
    console.log(`node scripts/send-push-supabase.js --title "Test" --body "Hello" --url "/"`)
  } else {
    const error = await response.json()
    console.error('❌ Deployment failed:', error)
  }
}

main().catch(console.error)
