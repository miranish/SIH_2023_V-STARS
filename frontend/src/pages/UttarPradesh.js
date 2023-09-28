// StatePage.js (for Rajasthan)
import React from "react";
import ParallaxCard from "../components/ActionCard";
import "../styles/cards.css";
import "../styles/Navbar.css";
import Navbar from "../components/Navbar";

import MonumentsFG from "../assets/UP/upmonument.png";

import CultureFG from "../assets/UP/upculture.png";

import festival_fg from "../assets/UP/upfestival.png";

import "../styles/Rajasthan.css";

const UttarPradeshPage = () => {
  return (
    <div className="index">
      <div className="div">
        <h2
          style={{
            color: "white",
            padding: "10px",
          }}
          className="text-center "
        >
         Uttar Pradesh
        </h2>
        {/* <Navbar /> */}
        <div
          style={{
            width: "80%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            margin: "auto",
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
      </div>
    </div>
  );
};

export default UttarPradeshPage;
