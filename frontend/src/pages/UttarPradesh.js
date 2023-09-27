// StatePage.js (for Uttar Pradesh)
import React from "react";
import ParallaxCard from "../components/ActionCard";
import "../styles/cards.css";

import CultureBG from "../assets/UP/Culture_BG.png";
import CultureFG from "../assets/UP/Culture_FG.png";

import MonumentsBG from "../assets/UP/Monuments_BG.png";
import MonumentsFG from "../assets/UP/Monuments_FG.png";

import FestivalBG from "../assets/UP/Festival_BG.png";
import FestivalFG from "../assets/UP/Festival_FG.png";
import Navbar from "../components/Navbar";
const UttarPradeshPage = () => {
  const Culture_images = [CultureBG, CultureFG];

  const Monuments_images = [MonumentsBG, MonumentsFG];

  const Fest_images = [FestivalBG, FestivalFG];

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
        Uttar Pradesh
      </h2>
      <div
        style={{
          height: "100%",
          width: "80%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "auto",
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

export default UttarPradeshPage;
