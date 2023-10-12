import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import IndiaMap from "./pages/IndiaMap";

// STATES

import UttarPradeshPage from "./pages/UttarPradesh";
import TamilNaduPage from "./pages/TamilNadu";
import RajasthanPage from "./pages/Rajasthan";
import Trial from "./pages/Trial";

import { Ecommerce } from "./pages/Ecommerce";
import CulturePage from "./pages/Culture";
import { OutroTransition } from "./components/Transition";
import { TradePage } from "./pages/NewEcommerce";
import AddDataComponent from "./pages/AddData";
import Rajasthan from "./pages/Rajasthan";
// import NavB from "./components/NavB";

const App = () => {
  const StatesUrlData = [
    // {
    //   stateName: "tamilnadu",
    //   element: <TamilNaduPage />,
    // },
    { stateName: "rajasthan", element: <RajasthanPage /> },
    // {
    //   stateName: "uttarpradesh",
    //   element: <UttarPradeshPage />,
    // },
  ];

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

      <Route
        path={"/state-page/:stateName"}
        element={<Rajasthan />}
      />
      {/* Mapping states for code clarity */}
    </Routes>
  );
};

export default App;
