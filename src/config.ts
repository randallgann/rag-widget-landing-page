/**
 * Frontend configuration - simplified for landing page
 */

// Constants for the API service
export const API_SERVICE_URL = 'http://localhost:3001';
export const API_AUTH_LOGIN = `${API_SERVICE_URL}/api/auth/login`;
export const API_AUTH_SIGNUP = `${API_SERVICE_URL}/api/auth/login?screen_hint=signup`;
export const API_ADMIN = `${API_SERVICE_URL}/api/admin`;

// Constants for environment
export const ENVIRONMENT = process.env.NODE_ENV || 'development';