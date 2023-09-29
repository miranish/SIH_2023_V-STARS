import React from "react";
import { useEffect } from "react";
import "../styles/first.css";

import Atropos from "atropos/react";
import "atropos/css";

import AOS from "aos";
import "aos/dist/aos.css";

const ParallaxCardFirst = ({ images, title, subheading, delay }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="fade-up" data-aos-delay={50 * delay}>
      <Atropos
        // highlight={false}
        perspective={100}
        staticOffset={50}
        activeOffset={50}
        touchmultiplier="2"
        gatherinertia="true"
        shadow={false}
      >
        <div className="overlap-first">
          {/* <img
            className={"img"}
            src={Card_BG}
            alt={`Layer 1`}
          /> */}
          <div className="img" data-atropos-offset={"-2"}></div>
          <img
            className={"img-inside-first"}
            src={images}
            alt={`Layer 2`}
            data-atropos-offset={"0"}
          />
          <div className="text-wrapper-first">{title}</div>
        </div>
      </Atropos>
    </div>
  );
};

export default ParallaxCardFirst;
