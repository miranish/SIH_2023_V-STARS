import React from "react";
function IndiaMap() {
  return (
    <div id="mapwrapper">
      <div id="map_base">
      <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  {/* <!-- Background --> */}
  <rect width="100%" height="100%" fill="#f0f0f0" />

  <path
    d="M100,300 L150,200 L200,250 L250,300 L200,350 L150,400 Z"
    fill="#FFD700"
    stroke="#000"
    stroke-width="1"
  />

  <path
    d="M300,350 L400,300 L450,350 L400,400 Z"
    fill="#FF5733"
    stroke="#000"
    stroke-width="1"
  />


  <path
    d="M550,400 L600,350 L650,350 L700,400 L650,450 L600,450 Z"
    fill="#008000"
    stroke="#000"
    stroke-width="1"
  />


  <text x="120" y="320" font-size="12" fill="#000">Rajasthan</text>
  <text x="320" y="360" font-size="12" fill="#000">Maharashtra</text>
  <text x="580" y="410" font-size="12" fill="#000">Kerala</text>
</svg>

      </div>
    </div>
  );
}

export default IndiaMap;