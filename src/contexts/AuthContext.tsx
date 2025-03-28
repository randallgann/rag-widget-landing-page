import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  userProfile: any;
  checkAuth: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  isLoading: false,
  userProfile: null,
  checkAuth: () => {},
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // Since this is now just a landing page with no backend API,
  // we always set isAuthenticated to false and isLoading to false
  const [isAuthenticated] = useState<boolean>(false);
  const [isLoading] = useState<boolean>(false);
  const [userProfile] = useState<any>(null);

  // This function now does nothing since we don't need to check auth status
  // for a simple landing page
  const checkAuth = () => {
    // No-op - users will be redirected to the auth service directly
  };

  // No need for useEffect to check auth on load

  const value = {
    isAuthenticated,
    isLoading,
    userProfile,
    checkAuth,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};