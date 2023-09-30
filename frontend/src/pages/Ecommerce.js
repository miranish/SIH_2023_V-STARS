import React from "react";
import "../styles/ecommerce.css";
import { FrameCard } from "../components/FrameCard";

export const Ecommerce = () => {
  return (
    <div className="desktop">
      <div className="div">
        <div className="overlap">
          <div className="rectangle2" />
          <div className="rectangle3" />
          <div className="text-wrap">Home</div>
          <div className="text-wrapper-2">About Us</div>
          <div className="rectangle" />
          <div className="text-wrapper-3">Explore India</div>
        </div>
          <div className="div-wrapper">
          <div className="text-wrapper-4">Let’s Shop The Specials!</div>
        </div>
        <div
            className="main-box"
            style={{
              background: "#ffd2db",
              border: "9px solid rgb(181, 101, 118)",
              borderRadius: "50px",
              height: "55%",
              left: "50%",
              position: "absolute",
              top: "60%",
              width: "95vw",
              transform: "translate(-50%, -50%)",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <FrameCard
            title={"Clothes"}
            />

            <FrameCard 
            title={"Jewerally"} 
            src={""}
            />

            <FrameCard 
            title={"Instruments"} 
            src={""}
            />

            <FrameCard 
            title={"Art and Culture"} 
            src={""}
            />

            <FrameCard 
            title={"HandiCrafts"} 
            src={""}
            />

            <FrameCard 
            title={"Spices & Herbs"} 
            src={""}
            />
          </div>
      </div>
    </div>
  );
};
