import React from 'react';
import './StateComponent.css';
const Card = ({ imageSrc }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={imageSrc} alt="" />
      </div>
    </div>
  );
}

export default Card;
