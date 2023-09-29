// StatePage.js (for Rajasthan)
import React from "react";
import ParallaxCard from "../components/ActionCard";
import "../styles/cards.css";


import MonumentsFG from "../assets/TamilNadu/tamilnadutemple.png";

import CultureFG from "../assets/TamilNadu/tnArtculture.png";

import festival_fg from "../assets/TamilNadu/tnfestival.png";

import "../styles/Rajasthan.css";
import NavbarTop from "../components/NavbarTop";

const TamilNaduPage = () => {
  return (
    <div className="index">
      <NavbarTop />
      <div className="div">
        {/* <Navbar /> */}
        <div
          style={{
            width: "80%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            // margin: "auto",
            marginTop: "35px",
          }}
          className="card-container"
        >
          <ParallaxCard
            images={CultureFG}
            title="Culture"
            subheading="Subheading"
            delay={1}
          />
          <ParallaxCard
            images={MonumentsFG}
            title="Monuments"
            subheading="Subheading"
            delay={2}
          />
          <ParallaxCard
            images={festival_fg}
            title="Festivals"
            subheading="Subheading"
            delay={3}
          />
        </div>
        <h2
          style={{
            color: "black",
            padding: "10px",
          }}
          className="text-center state-title"
        >
          Tamil Nadu
        </h2>
      </div>
    </div>
  );
};

export default TamilNaduPage;
