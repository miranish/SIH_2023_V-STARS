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

import bg_image from "../assets/UP/Up_bg.png";
import { OutroTransition } from "../components/Transition";

const UttarPradeshPage = () => {
  const bgColor = "#005E7C";

  const UP_Card_Data = [
    {
      title: "Culture",
      imageSrc: CultureFG,
      url: "/culture?state=uttarpradesh",
      description:
        "The culture of the state is a rich and diverse one with many cultural traditions.",
      topPx: "10%",
      leftPx: "0%",
      heightSize: "80%",
      widthSize: "80%",
    },
    {
      title: "Monuments",
      imageSrc: MonumentsFG,
      url: "/monument?state=uttarpradesh",
      description:
        "There are several monuments in the city which symbolize various aspects of its history.",
      topPx: "30%",
      leftPx: "-11%",
      heightSize: "",
      widthSize: "100%",
    },
    {
      title: "Festivals",
      imageSrc: festival_fg,
      url: "/festival?state=uttarpradesh",
      topPx: "10%",
      leftPx: "5%",
      heightSize: "",
      widthSize: "",
    },
  ];
  return (
    <div>
      <NavB />
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
        <div className="div up">
          {/* <Navbar /> */}
          <div
            style={{
              width: "80%",
              height: "100%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
            className="card-container"
          >

        {UP_Card_Data.map((item, index) => (
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
                bgColor={bgColor}
              />
            ))}

            {/* <ParallaxCard
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
              topPx={"5%"}
              leftPx={"5%"}
            /> */}
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
      </div>
    </div>
  );
};

export default UttarPradeshPage;
