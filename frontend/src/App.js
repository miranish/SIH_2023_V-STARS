import React from 'react';
import { Routes, Route } from "react-router-dom";
import IndiaMap from './components/IndiaMap';
import StatePage from './components/StatePage';
import Home from './pages/Home';

const App = () => {
  return (
    <Routes>
        <Route exact path="/" index element={<Home/>} />
        <Route path="/india" element={<IndiaMap/>} />
        <Route path="/state-link/:stateName" element={<StatePage/>} />
    </Routes>
  );
};

export default App;
