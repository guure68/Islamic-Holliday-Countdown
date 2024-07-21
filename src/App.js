
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About'
import Home from './pages/Home';
import IslamicHolidayCountdown from './components/IslamicHolidayCountdown ';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/IslamicHolidayCountdown' element={<IslamicHolidayCountdown />} />
        <Route path='/About' element={<About />} />
       

      </Routes>
    </>
  );
}

export default App;