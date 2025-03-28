#!/bin/bash
set -e

# Default values - simplified for landing page only
API_URL=${API_URL:-http://api-service:3001}
CORS_ORIGIN=${CORS_ORIGIN:-"*"}

echo "API URL: $API_URL"
echo "CORS Origin: $CORS_ORIGIN"

# Replace placeholders in nginx config
cp /app/nginx.conf /etc/nginx/conf.d/default.conf
sed -i "s|__API_URL__|$API_URL|g" /etc/nginx/conf.d/default.conf
sed -i "s|__CORS_ORIGIN__|$CORS_ORIGIN|g" /etc/nginx/conf.d/default.conf

# Debug - show the actual config
echo "Generated Nginx config:"
cat /etc/nginx/conf.d/default.conf

echo "Starting Nginx..."
exec "$@"