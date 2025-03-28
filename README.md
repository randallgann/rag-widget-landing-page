# Marketing Landing Page

A responsive marketing landing page built with React, TypeScript, and Tailwind CSS that redirects users to an external API service for authentication.

## Features

- Responsive design that works on mobile, tablet, and desktop
- React with TypeScript for type safety
- Tailwind CSS for modern styling
- Direct redirection to API service (localhost:3001) for authentication
- Contact form
- Pricing section
- Feature showcase

## Project Structure

```
landing-page/
├── public/                  # Public assets
├── src/
│   ├── components/          # UI components
│   ├── contexts/            # React context providers (simplified)
│   ├── pages/               # Page components
│   ├── styles/              # CSS styles
│   ├── App.tsx              # Main App component
│   └── index.tsx            # Entry point
└── README.md                # This file
```

## Important Note

This project has been simplified to function as a static landing page only. The server-side authentication has been removed, and all authentication is now handled by redirecting users to the external API service at localhost:3001.

## Getting Started

1. Clone this repository
2. Install dependencies: `npm install`
3. For development:
   - Run the React dev server: `npm start` (runs on port 3003)
4. For production:
   - Build the React app: `npm run build`
   - Deploy the contents of the `build` directory to any static web server

## Development and Production Setup

### Development

In development, the application runs as a React dev server on port 3003 (front-end only). All authentication and API functionality is handled by redirecting to the API service at localhost:3001.

### Production

In production, the built React app can be served from any static web server or CDN. It does not require any server-side components as it functions as a static landing page.

## API Service

After clicking login or sign up, users are redirected to the API service running at `http://localhost:3001/api/auth/login` for authentication.

## Customization

- Change the color scheme by editing the Tailwind configuration in `tailwind.config.js`
- Replace placeholder content in the components
- Add additional pages or sections as needed
- Modify the authentication behavior in the server code
- Configure the admin portal URL in the `.env` file

## License

This project is MIT licensed.