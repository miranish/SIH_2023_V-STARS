import React from "react";
import Atropos from "atropos";
import "atropos/css";
import "./ActionCard.css";

const ParallaxCard = ({ images, title, subheading }) => {
  return (
    <div className="parallax-card">
      <Atropos
        perspective={500}
        staticOffset={50}
        touchMultiplier={2}
        gatherInertia={true}
      >
        {images.map((image, index) => (
          <Atropos.Layer key={index} perspectiveFactor={1.25}>
            <img src={image} alt={`Layer ${index}`} />
          </Atropos.Layer>
        ))}
      </Atropos>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{subheading}</p>
      </div>
    </div>
  );
};

export default ParallaxCard;
