import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import IndiaMap from "./pages/IndiaMap";

// STATES

import { Ecommerce } from "./pages/Ecommerce";
import CulturePage from "./pages/Culture";
import { OutroTransition } from "./components/Transition";
import { TradePage } from "./pages/NewEcommerce";
import AddDataComponent from "./pages/AddData";
// import NavB from "./components/NavB";

import Aos from "aos";
import StatePage from "./pages/StatePage";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);


  return (
    <Routes>
      <Route path="/trans" element={<OutroTransition />} />

      <Route exact path="/" index element={<Home />} />
      <Route path="/india" element={<IndiaMap />} />
      <Route path="/trade" element={<Ecommerce />} />
      <Route path="/newtrade" element={<TradePage />} />

      {/* <Route path="/culture" element={<CulturePage />} /> */}

      <Route path="/addData" element={<AddDataComponent />} />
      {/* <Route path="/navb" element={<NavB />} /> */}

      <Route path={"/state/:stateName"} element={<StatePage />} />
      {/* Mapping states for code clarity */}
    </Routes>
  );
};

export default App;
