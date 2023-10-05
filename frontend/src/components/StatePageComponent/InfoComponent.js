import React from 'react';
import './StateComponent.css';
const Info = ({ name, location, description }) => {
    return (
        <div className="info">
            <h1 className="text name">{name}</h1>
            <h4 className="text location">{location}</h4>
            <p className="text description">{description}</p>
        </div>
    );
}

export default Info;
