import React from "react";
import "../styles/ecommerce.css";
import { FrameCard } from "../components/FrameCard";
import NavB from "../components/NavB";

export const Ecommerce = () => {
  return (
    <div className="desktop">
      <div className="div">
        <NavB />
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
            alignItems: "center",
          }}
        >
          <FrameCard title={"Clothes"} />
        </div>
      </div>
    </div>
  );
};
