import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: 'error',
        message: 'Please fill in all fields.',
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        type: 'error',
        message: 'Please enter a valid email address.',
      });
      return;
    }
    
    // In a real application, you would send the form data to your server here
    console.log('Form submitted:', formData);
    
    // Show success message
    setFormStatus({
      type: 'success',
      message: 'Thank you! Your message has been sent.',
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    
    // Clear success message after a few seconds
    setTimeout(() => {
      setFormStatus({
        type: null,
        message: '',
      });
    }, 5000);
  };

  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or want to learn more? Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <form 
            className="bg-white shadow-md rounded-lg p-8"
            onSubmit={handleSubmit}
          >
            {formStatus.type && (
              <div 
                className={`mb-6 p-4 rounded-md ${
                  formStatus.type === 'success' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {formStatus.message}
              </div>
            )}
            
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Your email address"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Your message"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="btn btn-primary w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;