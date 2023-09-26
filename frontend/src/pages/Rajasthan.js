// StatePage.js (for Rajasthan)
import React from "react";
import "../styles/cards.css";
import ParallaxCard from "../components/ActionCard";
const RajasthanPage = () => {
  const images = [
    "https://c4.wallpaperflare.com/wallpaper/892/692/922/howl-s-moving-castle-studio-ghibli-fantasy-art-clouds-daylight-hd-wallpaper-preview.jpg",
    "https://64.media.tumblr.com/5d6814b4bac11eab83e9e049b8226adb/tumblr_mnjfmwVtzZ1r49apoo1_500.png"
  ]

  return (
    <div>
      <div className="text-center">RAJASTHAN</div>
      <div>
      style={{
        width: "80%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-end",
        margin: "auto"

      }}
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
            title="Cuisines"
            subheading="Subheading"
          />
        </div>
      </div>
  );
};

export default RajasthanPage;
