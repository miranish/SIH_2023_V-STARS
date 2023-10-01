// StatePage.js (for Rajasthan)
import React from "react";
import ParallaxCard from "../components/ActionCard";
import "../styles/cards.css";

import MonumentsFG from "../assets/Rajasthan/hawa-mahal.png";

import CultureFG from "../assets/Rajasthan/puppet-dolls.png";

import festival_fg from "../assets/Rajasthan/camel.png";

import "../styles/Rajasthan.css";

import NavB from "../components/NavB";

import bg_image from "../assets/Rajasthan/rg_bg.png";
import BetterNavbar from "../components/BetterNavbar";
// import NavbarTop from "../components/NavbarTop";

const RajasthanPage = () => {
  const bg_color = "#7F5539"
  const RJ_Card_Data = [
    {
      title: "Culture",
      imageSrc: CultureFG,
      url: "/culture?state=tamilnadu",
      description:
        "The culture of the state is a rich and diverse one with many cultural traditions.",
      topPx: "-7%",
      leftPx: "5%",
      heightSize: "",
      widthSize: "",
    },
    {
      title: "Monuments",
      imageSrc: MonumentsFG,
      url: "/monuments?state=rajasthan",
      description: "Hawa Mahal, The Puppet Doll Festival, Camel Festival",
      topPx: "24%",
      leftPx: "-7%",
      heightSize: "87%",
      widthSize: "87%",
    },
    {
      title: "Festivals",
      imageSrc: festival_fg,
      url: "/festivals?state=rajasthan",
      description: `Camel Festival`,
      topPx: "29%",
      leftPx: "-4%",
      heightSize: "57%",
      widthSize: "90%",
    },
  ];
  return (
    <div>
      {/* <NavB /> */}
      <BetterNavbar />

      <div
        className="index"
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
              height: "100%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: "35px",
            }}
            className="card-container"
          >
            {/* Parallax Card Mapping*/}
            {RJ_Card_Data.map((item, index) => (
              <ParallaxCard
                key={index}
                images={item.imageSrc}
                title={item.title}
                subheading={item.description}
                delay={index + 1}
                topPx={item.topPx}
                leftPx={item.leftPx}
                heightSize={item.heightSize}
                widthSize={item.widthSize}
                bgColor={bg_color}
                url={item.url}
              />
            ))}

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
