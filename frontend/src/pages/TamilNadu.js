// StatePage.js (for Tamil Nadu)
import React from "react";
import ParallaxCard from '../components/ActionCard'
import "../styles/cards.css";
import ShoreFG from '../assets/TamilNadu/ShoreTemple.png'
import ShoreBG from '../assets/TamilNadu/ShoreTempleBG.png'

import FestFG from '../assets/TamilNadu/FestBG.png'
import FestBG from '../assets/TamilNadu/FestFG.png'

const TamilNaduPage = () => {
  const imagesMonuments = [
    ShoreBG,
    ShoreFG
  ]
  const imagesCulture = [
    "https://media.discordapp.net/attachments/1155080418744352798/1156264313653313576/TN1_BG.png?ex=6514568e&is=6513050e&hm=63ce297f6d8bb6850aca756dbc57ed4152425ca936f38fc4ea2a936edcd45390&=&width=1510&height=1008",
    "https://media.discordapp.net/attachments/1155080418744352798/1156264502338261132/TN1_FG.png?ex=651456bb&is=6513053b&hm=d7e764174da0640c38801d3732b1c37d8286634e80a641492755070b2bd33dbe&=&width=1510&height=1008"
    
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
