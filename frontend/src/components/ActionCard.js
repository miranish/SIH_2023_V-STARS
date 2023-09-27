import React from "react";
import { useEffect } from "react";
import "../styles/ActionCard.css";

import Atropos from "atropos/react";
import "atropos/css";

import AOS from 'aos';
import 'aos/dist/aos.css';

const ParallaxCard = ({ images, title, subheading, delay }) => {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="parallax-card" data-aos="fade-up" data-aos-delay={50 * delay}>
      <Atropos
        // highlight={false}
        perspective={100}
        staticOffset={50}
        activeOffset={50}
        touchMultiplier={2}
        gatherInertia={true}
        shadow={false}
      >
        {images.map((image, index) => {
          const totalLayer = images.length;
          console.log(`- ${totalLayer - index}`);
          return (
            <img
              className={index > 0 ? "img1" : "img2"}
              src={image}
              alt={`Layer ${index}`}
              data-atropos-offset={index < 1 ? "2" : "1"}
            />
          );
        })}
        <div className="card-content">
          <h2>{title}</h2>
          <p>{subheading}</p>
        </div>
      </Atropos>
    </div>
  );
};

export default ParallaxCard;
