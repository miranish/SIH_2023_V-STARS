// StatePage.js (for Rajasthan)
import React from "react";
import ParallaxCard from "../components/ActionCard";
import "../styles/cards.css";
import "../styles/Navbar.css";
import Navbar from "../components/Navbar";

import MonumentsFG from "../assets/Rajasthan/hawa-mahal.png";

import CultureFG from "../assets/Rajasthan/puppet-dolls.png";

import festival_fg from "../assets/Rajasthan/camel.png";

import "../styles/Rajasthan.css";

const RajasthanPage = () => {
  return (
    <div className="index">
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
          Rajasthan
        </h2>
      </div>
    </div>
  );
};

export default RajasthanPage;
