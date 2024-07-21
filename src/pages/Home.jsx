import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center text-white">
      <div className="bg-indigo-500 bg-opacity-75 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Welcome to the Islamic Holiday Countdown
        </h1>
        <p className="text-lg mb-8 text-center">
          Keep track of the next upcoming Islamic holiday and stay informed.
        </p>
       
      </div>
    </div>
  );
};

export default Home;