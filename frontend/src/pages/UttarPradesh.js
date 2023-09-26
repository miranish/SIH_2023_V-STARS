// StatePage.js (for Uttar Pradesh)
import React from 'react';
import ParallaxCard from '../components/ActionCard'
import "../styles/cards.css";
const images = [
  "https://c4.wallpaperflare.com/wallpaper/892/692/922/howl-s-moving-castle-studio-ghibli-fantasy-art-clouds-daylight-hd-wallpaper-preview.jpg",
  "https://64.media.tumblr.com/5d6814b4bac11eab83e9e049b8226adb/tumblr_mnjfmwVtzZ1r49apoo1_500.png"
]

const UttarPradeshPage = () => {

  const imagesUP = [
    "https://media.discordapp.net/attachments/1149360574153621547/1156257922343510047/UP1_BG.png?ex=6514509a&is=6512ff1a&hm=de1a0519f90042314d58a1cbd9e3104f1be39887e0a004e8d8c434685559ce7d&=&width=1660&height=1008",
    "https://cdn.discordapp.com/attachments/1149360574153621547/1156259185995030620/UP1_FG_Large.png?ex=651451c8&is=65130048&hm=e47fa98f6b6d0801c3acffda99b6ec9475d5abb4b3d7a57286317897634fa605&"
  ]

  return (
    <div>
      <h2 className='text-center'>Uttar Pradesh</h2>
      <div
      style={{
        width: "80%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-end",
        margin: "auto"

      }}
      >
      <ParallaxCard
        images={imagesUP}
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

export default UttarPradeshPage;
