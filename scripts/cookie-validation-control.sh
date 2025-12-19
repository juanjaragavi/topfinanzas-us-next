#!/bin/bash

# Quiz Cookie Validation Test Script
# This script demonstrates how to control the cookie validation system

echo "🧪 Quiz Cookie Validation Control System Test"
echo "=============================================="
echo ""

# Function to show current environment variable values
show_current_config() {
    echo "📋 Current Configuration:"
    echo "   COOKIE_VALIDATION_ENABLED: ${NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED:-'not set (defaults to true)'}"
    echo "   COOKIE_SHORT_EXPIRATION: ${NEXT_PUBLIC_COOKIE_SHORT_EXPIRATION:-'not set (defaults to 1)'}"
    echo ""
}

# Function to set validation disabled
disable_validation() {
    echo "🔴 Disabling Cookie Validation..."
    echo ""
    echo "# Quiz Cookie Validation - DISABLED" > /tmp/cookie_config_disabled.env
    echo "NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED=false" >> /tmp/cookie_config_disabled.env
    echo "NEXT_PUBLIC_COOKIE_SHORT_EXPIRATION=1" >> /tmp/cookie_config_disabled.env
    echo ""
    echo "✅ Configuration for DISABLED validation:"
    cat /tmp/cookie_config_disabled.env
    echo ""
    echo "📝 To apply: Copy these lines to your .env.local file and restart the app"
    echo ""
}

# Function to set validation enabled
enable_validation() {
    echo "🟢 Enabling Cookie Validation..."
    echo ""
    echo "# Quiz Cookie Validation - ENABLED" > /tmp/cookie_config_enabled.env
    echo "NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED=true" >> /tmp/cookie_config_enabled.env
    echo "NEXT_PUBLIC_COOKIE_SHORT_EXPIRATION=1" >> /tmp/cookie_config_enabled.env
    echo ""
    echo "✅ Configuration for ENABLED validation:"
    cat /tmp/cookie_config_enabled.env
    echo ""
    echo "📝 To apply: Copy these lines to your .env.local file and restart the app"
    echo ""
}

# Function to test the current configuration
test_configuration() {
    echo "🧪 Testing Current Configuration..."
    echo ""
    
    # Check if Next.js is running
    if curl -s http://localhost:3040 > /dev/null; then
        echo "✅ Next.js server is running on http://localhost:3040"
        echo "🔗 Quiz URL: http://localhost:3040/quiz"
        echo ""
        echo "🧪 Test Steps:"
        echo "   1. Visit http://localhost:3040/quiz"
        echo "   2. Complete the quiz"
        echo "   3. Try to access the quiz again"
        echo "   4. Check browser console for validation logs"
        echo ""
        echo "Expected Behavior (Validation DISABLED):"
        echo "   - Users can retake quiz immediately"
        echo "   - Console shows: '[QUIZ] Cookie validation temporarily disabled'"
        echo "   - Cookies expire after 1 day"
        echo ""
    else
        echo "❌ Next.js server is not running"
        echo "🚀 Start with: npm run dev"
        echo ""
    fi
}

# Function to show deployment instructions
show_deployment_info() {
    echo "🚀 Deployment Instructions"
    echo "========================="
    echo ""
    echo "For Production Deployment:"
    echo "1. Environment variables are already set in .env.production"
    echo "2. Current production config has validation DISABLED"
    echo "3. Deploy normally with your usual process"
    echo ""
    echo "To Re-enable Validation in Production:"
    echo "1. Edit .env.production"
    echo "2. Set NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED=true"
    echo "3. Redeploy application"
    echo ""
    echo "🔍 Monitoring:"
    echo "   - Check browser console for validation status logs"
    echo "   - Look for '[QUIZ] Cookie validation: [enabled/disabled]' messages"
    echo ""
}

# Main menu
case "$1" in
    "config")
        show_current_config
        ;;
    "disable")
        disable_validation
        ;;
    "enable")
        enable_validation
        ;;
    "test")
        test_configuration
        ;;
    "deploy")
        show_deployment_info
        ;;
    *)
        echo "Usage: $0 {config|disable|enable|test|deploy}"
        echo ""
        echo "Commands:"
        echo "  config  - Show current configuration"
        echo "  disable - Generate config to disable validation"
        echo "  enable  - Generate config to enable validation"
        echo "  test    - Test current configuration"
        echo "  deploy  - Show deployment instructions"
        echo ""
        echo "Current Status: Cookie validation is DISABLED"
        echo ""
        ;;
esac
