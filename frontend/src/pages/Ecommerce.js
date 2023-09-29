import React from "react";
import "../styles/ecommerce.css";
import { FrameCard } from "../components/FrameCard";

export const Ecommerce = () => {
  return (
    <div className="desktop">
      <div className="div">
        <div className="overlap">
          <div className="ellipse" />
          <div className="ellipse-2" />
          <div className="text-wrapper">Home</div>
          <div className="text-wrapper-2">About Us</div>
        </div>
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="text-wrapper-3">Explore India</div>
        </div>
        <div className="div-wrapper">
          <div className="text-wrapper-4">Let’s Shop The Specials!</div>
        </div>
        <div>
            <FrameCard title={"Clothes"} src={""} />
        </div>
      </div>
    </div>
  );
};