# Changelog

**IMPORTANT**: This file should be updated with all significant code changes and feature additions. Each entry should include:
- Date of change
- Description of changes
- Reason/purpose for changes
- Files modified

## Changes

### 2025-03-01: Auth0 Authentication Logging Implementation

**Changes Made:**
- Added comprehensive authentication logging for security and audit purposes
- Implemented Winston logger for structured JSON logging
- Added Morgan for HTTP request logging
- Created log masking for sensitive user data
- Added logging for login success, login failure, protected route access, and logout events

**Purpose:**
Implemented best practices for authentication logging to track user activity securely while protecting user privacy. Logs are stored in both console and file format for auditing and debugging purposes.

**Files Modified:**
- `/server/server.js`
- `/package.json`

**Technical Details:**
1. Configured Winston logger with file and console transports:
   ```javascript
   const logger = winston.createLogger({
     level: process.env.LOG_LEVEL || 'info',
     format: winston.format.combine(
       winston.format.timestamp(),
       winston.format.json()
     ),
     transports: [
       new winston.transports.Console({...}),
       new winston.transports.File({...})
     ]
   });
   ```

2. Implemented secure logging in afterCallback hook:
   ```javascript
   // Mask email for privacy
   const maskedEmail = userEmail.replace(/(.{3})(.*)(@.*)/, '$1***$3');
   
   // Log successful authentication
   logger.info('Authentication successful', {
     user: maskedEmail,
     userId: userId.substring(userId.length - 8), // Just log last 8 chars of ID
     ip: req.ip,
     userAgent: req.headers['user-agent'],
     timestamp: new Date().toISOString()
   });
   ```

3. Added global error handler for authentication failures:
   ```javascript
   app.use((err, req, res, next) => {
     // Check if this is an authentication error
     if (err && (err.status === 401 || err.status === 403 || err.error === 'unauthorized')) {
       logger.warn('Authentication failed', {
         error: err.message,
         errorCode: err.error || 'unknown',
         ip: req.ip,
         userAgent: req.headers['user-agent']
       });
     }
     next(err);
   });
   ```

4. Added protected route access logging middleware:
   ```javascript
   function logProtectedAccess(req, res, next) {
     if (req.oidc && req.oidc.isAuthenticated() && req.oidc.user) {
       const userEmail = req.oidc.user.email || 'unknown';
       const maskedEmail = userEmail.replace(/(.{3})(.*)(@.*)/, '$1***$3');
       
       logger.info('Protected resource accessed', {
         user: maskedEmail,
         resource: req.path,
         method: req.method,
         ip: req.ip,
         userAgent: req.headers['user-agent']
       });
     }
     next();
   }
   ```

### 2025-03-01: Auth0 Redirect Configuration Improvements (Updated)

**Changes Made:**
- Updated Auth0 configuration in server.js with proper session and cookie settings
- Added security improvements to CORS configuration
- Implemented returnTo URL validation for callback handler
- Added environment variables for auth server URL configuration
- Updated .env and .env.example files with new variables

**Purpose:**
Fixed an issue where after login, users were being redirected to the auth server (localhost:3001) instead of the frontend application (localhost:3001). The changes follow security best practices by implementing proper session handling, CORS configuration, and URL validation.

**Files Modified:**
- `/server/server.js`
- `/.env`
- `/.env.example`

**Technical Details:**
1. Added secure cookie settings:
   ```javascript
   session: {
     rolling: true,
     absoluteDuration: 86400, // 24 hours
     cookie: {
       secure: process.env.NODE_ENV === 'production',
       httpOnly: true,
       sameSite: 'Lax'
     }
   }
   ```

2. Used Auth0 afterCallback hook to ensure consistent redirect to admin portal:
   ```javascript
   // After successful authentication, handle custom redirect
   afterCallback: (req, res, session, decodedState) => {
     console.log('Auth0 afterCallback hook triggered');
     
     // Looking at the code, we know req.openidState.returnTo is used for redirect
     // on line 419 of context.js
     if (!req.openidState) {
       req.openidState = {};
     }
     
     const adminPortalUrl = process.env.ADMIN_PORTAL_URL || 'http://localhost:3001/';
     req.openidState.returnTo = adminPortalUrl;
     
     console.log('Setting openidState.returnTo to:', req.openidState.returnTo);
     return session;
   }
   ```

3. Enhanced CORS security:
   ```javascript
   const corsOptions = {
     origin: [
       process.env.REACT_APP_URL || 'http://localhost:3003',
       process.env.ADMIN_PORTAL_URL || 'http://localhost:3001'
     ],
     credentials: true,
     methods: ['GET', 'POST'],
     allowedHeaders: ['Content-Type', 'Authorization']
   };
   ```