// StatePage.js (for Rajasthan)
import React, { useEffect, useState } from "react";
import NavbarTop from "../components/NavbarTop";

const CulturePage = () => {
  const [stateData, setStateData] = useState({});

  async function loadState(stateName) {
    const response = await fetch("");
    const data = await response.json();
  }

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const stateName = urlParams.get("state");
    
    console.log(stateName)
  }, []);
  return (
    <div className="">
      <NavbarTop />
      <div>

      </div>
    </div>
  );
};

export default CulturePage;
