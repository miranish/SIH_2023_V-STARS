// StatePage.js (for Rajasthan)
import React from "react";
import ParallaxCard from "../components/ActionCard";
import "../styles/cards.css";

import MonumentsFG from "../assets/Rajasthan/hawa-mahal.png";

import CultureFG from "../assets/Rajasthan/puppet-dolls.png";

import festival_fg from "../assets/Rajasthan/camel.png";

import "../styles/Rajasthan.css";

import NavB from "../components/NavB";

import bg_image from "../assets/Rajasthan/rg_bg.png"
// import NavbarTop from "../components/NavbarTop";

const RajasthanPage = () => {
  return (
    <div>
      <NavB />
      
      <div className="index"
              style={{
                background: `url('${bg_image}')`,
                height: "100vh",
                width: "100%",
                backgroundRepeat: "repeat",
                backgroundSize: "cover",
              }}
      >
        {/* <NavbarTop /> */}

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
            {/* <ParallaxCard */}
            <ParallaxCard
              images={CultureFG}
              title="Culture"
              subheading="Subheading"
              delay={1}
              topPx={"-7%"}
              leftPx={"5%"}
            />
            <ParallaxCard
              images={MonumentsFG}
              title="Monuments"
              subheading="Subheading"
              delay={2}
              topPx={"24%"}
              leftPx={"-7%"}
              heightSize={"87%"}
              widthSize={"87%"}
            />
            <ParallaxCard
              images={festival_fg}
              title="Festivals"
              subheading="Subheading"
              delay={3}
              topPx={"29%"}
              leftPx={"-4%"}
              heightSize={"57%"}
              widthSize={"90%"}
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
    </div>
  );
};

export default RajasthanPage;
