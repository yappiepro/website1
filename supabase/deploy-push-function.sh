#!/bin/bash

# Deploy Supabase Edge Function for Push Notifications

echo "🚀 Deploying send-push function to Supabase..."

# Check if Supabase CLI is installed
if ! command -v supabase &> /dev/null; then
  echo "❌ Supabase CLI not found. Install with: npm install -g supabase"
  exit 1
fi

# Deploy the function
supabase functions deploy send-push \
  --project-ref famxhijlisxdsggevcqi \
  --no-verify-jwt

echo "✅ Function deployed!"
echo ""
echo "📤 Send test push:"
echo "curl -X POST 'https://famxhijlisxdsggevcqi.supabase.co/functions/v1/send-push' \\"
echo "  -H 'Authorization: Bearer YOUR_SERVICE_ROLE_KEY' \\"
echo "  -H 'Content-Type: application/json' \\"
echo "  -d '{\"title\":\"Test\",\"body\":\"Hello\",\"url\":\"/\"}'"
