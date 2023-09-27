import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import { BrowserRouter } from "react-router-dom";

import CustomCursor1 from './components/BacksideComponent/CustomCursor';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CustomCursor1/>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>
);