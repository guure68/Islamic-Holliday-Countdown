import React, { useState, useEffect } from 'react';

const IslamicHolidayCountdown = () => {
  const [countdown, setCountdown] = useState(null);
  const [holidayDate, setHolidayDate] = useState(new Date('2024-07-29'));

  const handleDateChange = (event) => {
    setHolidayDate(new Date(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateCountdown();
  };

  const updateCountdown = () => {
    const now = new Date();
    const timeRemaining = holidayDate.getTime() - now.getTime();
  
    if (timeRemaining > 0) {
      const months = Math.floor((holidayDate.getMonth() - now.getMonth() + 12 * (holidayDate.getFullYear() - now.getFullYear())) % 12);
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24); // Adjusted hours calculation
      const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60); // Adjusted minutes calculation
      const seconds = Math.floor((timeRemaining / 1000) % 60); // Adjusted seconds calculation
  
      setCountdown(`${months} months, ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`);
    } else {
      setCountdown('The next Islamic holiday has arrived!');
    }
  };

  useEffect(() => {
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [holidayDate, updateCountdown]); // Added holidayDate and updateCountdown to the dependency array

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://source.unsplash.com/1600x900/?space")',
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-indigo-500">
          Countdown to the Next Celestial Celebration
        </h2>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-4">
            <label htmlFor="holiday-date" className="block font-bold mb-2">
              Select the Next Islamic Holiday Date:
            </label>
            <input
              type="date"
              id="holiday-date"
              value={holidayDate.toISOString().split('T')[0]}
              onChange={handleDateChange}
              className="border border-gray-400 p-2 rounded-lg w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg w-full"
          >
            Update Countdown
          </button>
        </form>
        {countdown ? (
          <p className="text-4xl font-bold text-center">{countdown}</p>
        ) : (
          <p className="text-2xl text-center">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default IslamicHolidayCountdown;
