// StatePage.js (for Tamil Nadu)
import React from "react";
import ParallaxCard from "../components/ActionCard";
import "../styles/cards.css";
import ShoreFG from "../assets/TamilNadu/ShoreTemple.png";
import ShoreBG from "../assets/TamilNadu/ShoreTempleBG.png";

import FestFG from "../assets/TamilNadu/FestBG.png";
import FestBG from "../assets/TamilNadu/FestFG.png";

import CultureFG from "../assets/TamilNadu/TN1_FG.png";
import CultureBG from "../assets/TamilNadu/TN1_BG.png";
import Navbar from "../components/Navbar";

const TamilNaduPage = () => {
  const imagesMonuments = [ShoreBG, ShoreFG];
  const imagesCulture = [CultureBG, CultureFG];

  const imagesFest = [FestBG, FestFG];
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #F5C54E 10%, #FFDBA6 10%, #F7BB93 0%, #F2995E 0%, #f07560 0%, #FFAB93 80%)",
        height: "100vh",
      }}
    >
      <Navbar />
      <h2
        style={{
          color: "white",
          padding: "10px",
        }}
        className="text-center"
      >
        Tamil Nadu
      </h2>
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
