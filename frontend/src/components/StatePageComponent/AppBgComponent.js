import React from "react";
import "./StateComponent.css";
const AppBg = ({ images }) => {
  const states = ["previous--image", "current--image", "next--image"];
  return (
    <div className="app__bg">
      {images.map((ele, index) => {
        return (
          <div class={"app__bg__image " + states[index]}>
            <img src={ele.imageSrc} alt="index" />
          </div>
        );
      })}
    </div>
  );
};

export default AppBg;
