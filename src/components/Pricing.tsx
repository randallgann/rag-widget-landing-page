import React from 'react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Basic',
      price: 9.99,
      description: 'Perfect for individuals and small projects.',
      features: [
        'Feature 1',
        'Feature 2',
        'Feature 3',
        'Email Support',
      ],
      isFeatured: false,
    },
    {
      name: 'Premium',
      price: 19.99,
      description: 'Ideal for growing businesses and teams.',
      features: [
        'All Basic Features',
        'Feature 4',
        'Feature 5',
        'Feature 6',
        'Priority Support',
      ],
      isFeatured: true,
    },
    {
      name: 'Enterprise',
      price: 29.99,
      description: 'Advanced features for larger organizations.',
      features: [
        'All Premium Features',
        'Feature 7',
        'Feature 8',
        'Feature 9',
        'Dedicated Support',
        'Custom Integrations',
      ],
      isFeatured: false,
    },
  ];
  
  return (
    <section id="pricing" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Plans</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`card border ${
                plan.isFeatured 
                  ? 'border-primary relative transform lg:scale-105 lg:-translate-y-2' 
                  : 'border-gray-200'
              }`}
            >
              {plan.isFeatured && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Popular Choice
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-500">/month</span>
              </div>
              
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="http://localhost:3001/login" 
                className={`btn w-full ${
                  plan.isFeatured 
                    ? 'btn-primary' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;