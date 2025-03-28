# Project Summary: Landing Page with Auth0 Integration

## Architecture Overview
We've created a landing page/marketing site with the following architecture:

1. **React Frontend (TypeScript + Tailwind CSS)**
   - Port: 3003
   - Role: User interface, marketing content

2. **API Auth Server / Admin Portal**
   - Port: 3001
   - Role: Handles Auth0 authentication flow and dashboard rendering


## Auth0 Configuration

### Application Type
- Regular Web Application (not SPA)

### Required Settings
- **Allowed Callback URLs**: `http://localhost:3001/callback`
- **Allowed Logout URLs**: `http://localhost:3001/logout-complete`, `http://localhost:3003`
- **Allowed Web Origins**: `http://localhost:3001`, `http://localhost:3003`

## Key Environment Variables
```
PORT=3001
BASE_URL=http://localhost:3001
AUTH0_SECRET=your_secret_here
AUTH0_CLIENT_ID=your_client_id
AUTH0_DOMAIN=your_domain.auth0.com
AUTH0_CLIENT_SECRET=your_client_secret
ADMIN_PORTAL_URL=http://localhost:3001
REACT_APP_URL=http://localhost:3003
```

## Development Commands
- Start React app only: `npm start`
- Start Auth server only: `npm run start:server`
- Start both concurrently: `npm run dev`
- Build for production: `npm run build`

## Authentication Flow
1. User clicks login/signup on React app (port 3003)
2. Auth0 handles authentication
3. Redirects to Express server callback (port 3001)
4. Express server redirects to:
   - Admin portal (port 3001) if admin access was requested
   - React app (port 3003) for regular login

## Implementation Details
- Server-side authentication with Auth0
- Express middleware for secure routes
- CORS configured for cross-origin communication
- Environment variables for configuration
- Full redirects properly configured

## Key Files
- `/server/server.js` - Express server, Auth0 config
- `/src/contexts/AuthContext.tsx` - Auth state management
- `/src/components/Navbar.tsx` - Navigation with auth buttons
- `/src/components/AdminPortal.tsx` - Admin portal redirect logic