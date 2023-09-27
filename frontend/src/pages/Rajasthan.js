// StatePage.js (for Rajasthan)
import React from "react";
import ParallaxCard from "../components/ActionCard";
import "../styles/cards.css";
import Navbar from "../components/Navbar";
const RajasthanPage = () => {
  
  const images = [
    "https://c4.wallpaperflare.com/wallpaper/892/692/922/howl-s-moving-castle-studio-ghibli-fantasy-art-clouds-daylight-hd-wallpaper-preview.jpg",
    "https://64.media.tumblr.com/5d6814b4bac11eab83e9e049b8226adb/tumblr_mnjfmwVtzZ1r49apoo1_500.png"
  ]

  return (
    <div 
    style={{
      backgroundColor: "#2F2A52",
      height: "100vh"
    }}
    >
      <Navbar />
      <h2
      style={{
        color: "white",
        padding: "10px"
      }}
      className="text-center ">Rajasthan</h2>
      <div
      style={{
        width: "80%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        margin: "auto",
        // margin-top: "25px",

      }}
      >
      <ParallaxCard
        images={images}
        title="Culture"
        subheading="Subheading"
      />
      <ParallaxCard
        images={images}
        title="Monuments"
        subheading="Subheading"
      />
      <ParallaxCard
        images={images}
        title="Festivals"
        subheading="Subheading"
      />
        </div>
    </div>
  );
};

export default RajasthanPage;
