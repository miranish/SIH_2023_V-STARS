import React from "react";
import Info from "./InfoComponent";
import "./StateComponent.css";

const InfoList = ({ infos, currentIndex }) => {
  const states = ["previous--info", "current--info", "next--info"];
  return (
    <div className="infoList">
      <div className="info__wrapper">
        {infos.map((info, index) => (
          <Info
            current_state={states[index]}
            key={index}
            name={info.name}
            location={info.location}
            description={info.description}
          />
        ))}
      </div>
    </div>
  );
};

export default InfoList;
