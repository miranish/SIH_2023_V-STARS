// StatePage.js (for Rajasthan)
import React, {useEffect} from "react";
import ParallaxCard from "../components/ActionCard";
import "../styles/cards.css";

import MonumentsFG from "../assets/TamilNadu/tamilnadutemple.png";
import CultureFG from "../assets/TamilNadu/tnArtculture.png";
import festival_fg from "../assets/TamilNadu/tnfestival.png";

import bgimage from "../assets/TamilNadu/Tamil_bg.png";
import "../styles/Rajasthan.css";
import NavB from "../components/NavB";
import BetterNavbar from "../components/BetterNavbar";
// import NavbarTop from "../components/NavbarTop";

const TamilNaduPage = () => {
  const bgColor = "#005E7C";
  const TN_Card_Data = [
    {
      title: "Culture",
      imageSrc: CultureFG,
      url: "/culture?state=tamilnadu",
      description:
        "The culture of the state is a rich and diverse one with many cultural traditions.",
      topPx: "15%",
      leftPx: "5%",
      heightSize: "",
      widthSize: "",
    },
    {
      title: "Monuments",
      imageSrc: MonumentsFG,
      url: "/monument?state=tamilnadu",
      description:
        "There are several monuments in the city which symbolize various aspects of its history.",
      topPx: "18%",
      leftPx: "5%",
      heightSize: "",
      widthSize: "",
    },
    {
      title: "Festivals",
      imageSrc: festival_fg,
      url: "/festival?state=tamilnadu",
      topPx: "10%",
      leftPx: "5%",
      heightSize: "",
      widthSize: "",
    },
  ];

  async function fetchStateData(stateName) {
    const response = await fetch("API_ENDPOINT " + stateName);
    const data = response.json();
  }

  useEffect(() => {
    const state = window.location.pathname.split("/")[2];
    console.log(state)

  }, [])
  

  return (
    <div>
      <div
        className="index"
        style={{
          background: `url('${bgimage}')`,
          height: "100vh",
          width: "100%",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="div">
          <div
            style={{
              width: "80%",
              height: "100%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              // margin: "auto",
              marginTop: "35px",
            }}
            className="card-container"
          >
            {TN_Card_Data.map((item, index) => (
              <ParallaxCard
                key={index}
                images={item.imageSrc}
                title={item.title}
                subheading={item.description}
                delay={index + 1}
                url={item.url}
                bgColor={bgColor}

                topPx={item.topPx}
                leftPx={item.leftPx}
                heightSize={item.heightSize}
                widthSize={item.widthSize}
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
            Tamil Nadu
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TamilNaduPage;
