// StatePage.js (for Rajasthan)
import React from "react";
import ParallaxCard from "../components/ActionCard";
import "../styles/cards.css";

import MonumentsFG from "../assets/UP/upmonument.png";

import CultureFG from "../assets/UP/upculture.png";

import festival_fg from "../assets/UP/upfestival.png";

import "../styles/Rajasthan.css";

import NavB from "../components/NavB";
// import NavbarTop from "../components/NavbarTop";

import bg_image from "../assets/UP/Up_bg.png"
import { OutroTransition } from "../components/Transition";

const UttarPradeshPage = () => {
  return (
    <div

    >
      <NavB/>
      <OutroTransition />
    <div className="index"
        style={{
          background: `url('${bg_image}')`,
          height: "100vh",
          width: "100%",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
        }}
    >
      
      <div className="div up">
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
            bgColor="#718355"
            />
          <ParallaxCard
            images={MonumentsFG}
            title="Monuments"
            subheading="Subheading"
            delay={2}
            bgColor="#718355"
            topPx={"20%"}
            leftPx={"-11%"}
            heightSize={"81%"}
            widthSize={"100%"}
            />
          <ParallaxCard
            images={festival_fg}
            title="Festivals"
            subheading="Subheading"
            delay={3}
            bgColor="#718355"
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
