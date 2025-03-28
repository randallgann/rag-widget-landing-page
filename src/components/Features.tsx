import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Lightning Fast',
      description: 'Our product delivers results in seconds, not hours.',
    },
    {
      icon: '🔒',
      title: 'Secure',
      description: 'Your data is always protected with enterprise-grade security.',
    },
    {
      icon: '💡',
      title: 'Innovative',
      description: 'Stay ahead with our cutting-edge technology.',
    },
    {
      icon: '🔄',
      title: 'Seamless Integration',
      description: 'Connects with all your favorite tools and platforms.',
    },
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'Gain valuable insights with comprehensive reporting.',
    },
    {
      icon: '🌐',
      title: 'Global Access',
      description: 'Work from anywhere with cloud-based accessibility.',
    },
  ];

  return (
    <section id="features" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform is designed to help you achieve more with less effort. Here's what makes us special.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card hover:translate-y-[-8px]"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-primary">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;