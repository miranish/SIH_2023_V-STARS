// StatePage.js (for Tamil Nadu)
import React from "react";
import ParallaxCard from '../components/ActionCard'
import "../styles/cards.css";
import ShoreFG from '../assets/TamilNadu/ShoreTemple.png'
import ShoreBG from '../assets/TamilNadu/ShoreTempleBG.png'

import FestFG from '../assets/TamilNadu/FestBG.png'
import FestBG from '../assets/TamilNadu/FestFG.png'

import CultureFG from '../assets/TamilNadu/TN1_FG.png'
import CultureBG from '../assets/TamilNadu/TN1_BG.png'



const TamilNaduPage = () => {
  const imagesMonuments = [
    ShoreBG,
    ShoreFG
  ]
  const imagesCulture = [
    CultureBG,
    CultureFG
  ]

  const imagesFest = [
    FestBG,
    FestFG
  ]
  return (

    
    <div>
      <h2 className="text-center">Tamil Nadu</h2>
      <div 
      style={{
        width: "80%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-end",
        margin: "auto",
       
      }}
      >
      <ParallaxCard
        images={imagesCulture}
        title="Culture"
        subheading="Subheading"
      />
      <ParallaxCard
        images={imagesMonuments}
        title="Monuments"
        subheading="Subheading"
      />
      <ParallaxCard
        images={imagesFest}
        title="Festivals"
        subheading="Subheading"
      />
        </div>
    </div>
  );
};

export default TamilNaduPage;
