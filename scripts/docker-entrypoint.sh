#!/bin/bash
# Custom entrypoint script for Nginx container with environment-specific configuration

set -e

# Load environment config based on ENVIRONMENT variable
if [ -z "$ENVIRONMENT" ]; then
  ENVIRONMENT=${NODE_ENV:-local}
fi

echo "Loading configuration for environment: $ENVIRONMENT"

# Get environment-specific configuration
# This would normally come from the ConfigMap or environment variables
API_URL=${API_URL:-http://auth-server:3001}

# Create the APP_CONFIG_JSON if it's not already set
if [ -z "$APP_CONFIG_JSON" ]; then
  # Create a JSON object with configuration values
  APP_CONFIG_JSON=$(cat <<EOF
{
  "environment": "$ENVIRONMENT",
  "apiBaseUrl": "$API_URL",
  "auth0": {
    "domain": "$AUTH0_DOMAIN",
    "clientId": "$AUTH0_CLIENT_ID",
    "audience": "$AUTH0_AUDIENCE",
    "callbackUrl": "$AUTH0_CALLBACK_URL",
    "logoutUrl": "$AUTH0_LOGOUT_URL"
  }
}
EOF
)
fi

# Export the APP_CONFIG_JSON to make it available for nginx template processing
export APP_CONFIG_JSON

# Process nginx template files
echo "Configuring Nginx..."
envsubst '${API_URL} ${APP_CONFIG_JSON}' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf

# Start Nginx (the CMD from the Dockerfile)
echo "Starting Nginx..."
exec "$@"