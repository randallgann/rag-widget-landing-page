import React from 'react';

const AdminPortal: React.FC = () => {
  // Updated to use the API service URL
  const apiServiceUrl = 'http://localhost:3001';

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">API Service Access</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access the API service to manage your account and settings.
          </p>
        </div>
        
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold mb-4">Login Required</h3>
          <p className="text-gray-600 mb-6">
            You need to log in to access the API service.
          </p>
          <a href="http://localhost:3001/api/auth/login" className="btn btn-primary">
            Log In
          </a>
        </div>
      </div>
    </section>
  );
};

export default AdminPortal;