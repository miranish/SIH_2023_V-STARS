// StatePage.js (for Rajasthan)
import React from "react";
import ParallaxCard from "../components/ActionCard";
import "../styles/cards.css";

import MonumentsFG from "../assets/UP/upmonument.png";

import CultureFG from "../assets/UP/upculture.png";

import festival_fg from "../assets/UP/upfestival.png";

import "../styles/Rajasthan.css";
import ParallaxCardFourth from "../components/Fourth";
import NavB from "../components/NavB";
// import NavbarTop from "../components/NavbarTop";

const UttarPradeshPage = () => {
  return (
    <div>
      <NavB/>
    <div className="index">
      
      <div className="div">
        {/* <Navbar /> */}
        <div
          style={{
            width: "80%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
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
          <ParallaxCardFourth
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
          Uttar Pradesh
        </h2>
      </div>
    </div></div>
  );
};

export default UttarPradeshPage;
