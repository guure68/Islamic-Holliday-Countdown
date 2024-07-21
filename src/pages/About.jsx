import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center text-white">
      <div className="bg-indigo-500 bg-opacity-75 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-4xl font-bold mb-4 text-center">
          About the Islamic Holiday Countdown
        </h1>
        <p className="text-lg mb-8 text-center">
          This application is designed to help you keep track of the next upcoming Islamic holiday. You can select the holiday date and the countdown will display the time remaining until the celebration.
        </p>
      
      </div>
    </div>
  );
};

export default About;