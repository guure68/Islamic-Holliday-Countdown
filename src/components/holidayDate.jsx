import React from 'react';
import Countdown from './Countdown';

const holidayDate = new Date('2024-04-10T00:00:00');

const App = () => {
  return (
    <div>
      <Countdown targetDate={holidayDate} />
    </div>
  );
};

export default App;
