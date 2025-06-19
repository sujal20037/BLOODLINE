// DonationSteps.jsx
// import React from 'react';

const DonationSteps = () => {
  const steps = [
    {
      title: 'Registration Process',
      description: 'Sign up and schedule your first with ease and comfort',
      icon: '👤',
    },
    {
      title: 'Health Screening',
      description: 'A simple check-up to ensure you’re ready to donate',
      icon: '❤️',
    },
    {
      title: 'Donation Day',
      description: 'Relax as our professional staff guide you through',
      icon: '🤲',
    },
  ];

  return (
    <div className="bg-red-50 py-10 px-5">
      <h2 className="text-3xl font-bold text-center text-red-800 mb-8">How Donation Works?</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-5 flex flex-col items-center text-center max-w-sm"
          >
            <div className="text-6xl mb-4 text-red-600">{step.icon}</div>
            <h3 className="text-xl font-semibold text-red-700 mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationSteps;
