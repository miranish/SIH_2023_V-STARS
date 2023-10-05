import React from "react";
import { useEffect } from "react";
import "../styles/ActionCard.css";

import Atropos from "atropos/react";
import "atropos/css";

import AOS from "aos";
import "aos/dist/aos.css";

const ParallaxCard = ({
  images,
  title,
  subheading,
  delay,
  url,
  bgColor = "",
  topPx,
  leftPx,
  heightSize,
  widthSize,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "relative"
      }}
      data-aos="fade-up"
      data-aos-delay={50 * delay}
      onClick={() => (window.location.href = url)}
    >
      <div className="overlap-2">
        <Atropos
          // highlight={false}
          style={{
            height: "100%"
          }}
          perspective={100}
          staticOffset={50}
          activeOffset={50}
          touchmultiplier="2"
          gatherinertia="true"
          shadow={false}
        >
          {/* <img
            className={"img"}
            src={Card_BG}
            alt={`Layer 1`}
          /> */}
          <div
            className="img"
            data-atropos-offset={"-2"}
            style={{

              backgroundColor: bgColor,
            }}
          ></div>
          <img
            style={{
              top: topPx,
              left: leftPx,
              height: heightSize,
              width: widthSize,
            }}
            className={"img-inside"}
            src={images}
            alt={`Layer 2`}
            data-atropos-offset={"0"}
          />
          <div className="text-wrapper">{title}</div>
        </Atropos>
      </div>
    </div>
  );
};

export default ParallaxCard;
