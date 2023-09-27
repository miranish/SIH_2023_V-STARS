// StatePage.js (for Rajasthan)
import React from "react";
import ParallaxCard from "../components/ActionCard";
import "../styles/cards.css";
import Navbar from "../components/Navbar";

import CultureBG from "../assets/Rajasthan/culture_bg.png";
import CultureFG from "../assets/Rajasthan/culture_fg.png";

import MonumentsBG from "../assets/Rajasthan/Monument_BG.png";
import MonumentsFG from "../assets/Rajasthan/Monument_FG.png";

import festival_fg from "../assets/Rajasthan/Fest_FG.png";
import festival_bg from "../assets/Rajasthan/Fest_BG.png";

const RajasthanPage = () => {
  
  const Culture_images = [CultureBG, CultureFG];

  const Monuments_images = [MonumentsBG, MonumentsFG];

  const Fest_images = [festival_bg, festival_fg];

  return (
    <div 
    style={{
      background: "linear-gradient(to bottom, #F5C54E 10%, #FFDBA6 10%, #F7BB93 0%, #F2995E 0%, #f07560 0%, #FFAB93 80%)",
      height: "100vh"
    }}
    >
      <Navbar />
      <h2
      style={{
        color: "white",
        padding: "10px"
      }}
      className="text-center ">Rajasthan</h2>
      <div
      style={{
        width: "80%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        margin: "auto",
        // margin-top: "25px",

      }}
      >
              <ParallaxCard
          images={Culture_images}
          title="Culture"
          subheading="Subheading"
        />
        <ParallaxCard
          images={Monuments_images}
          title="Monuments"
          subheading="Subheading"
        />
        <ParallaxCard
          images={Fest_images}
          title="Festivals"
          subheading="Subheading"
        />
        </div>
    </div>
  );
};

export default RajasthanPage;
