import React from 'react';
import './StateComponent.css';
const Card = ({ imageSrc, current_state}) => {
  return (
    <div className={"card " + current_state }>
      <div className="card__image">
        <img src={imageSrc} alt="" />
      </div>
    </div>
  );
}

export default Card;
