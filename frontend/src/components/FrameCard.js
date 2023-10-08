import React from "react";
import styled from "styled-components";

import cart from "../assets/icons/cart-icon.svg";
import heart from "../assets/icons/heart-icon.svg";
import iconContainer from "../assets/icons/Vector-2.svg";
import CardContainer from "../assets/icons/Vector-1.svg";

const StyledFrame = styled.div`
  height: 90%;
  position: relative;
  width: 20%;

  & .overlap-group-card {
    height: 100%;
    left: 0;
    position: relative;
    top: 0;
    width: 100%;
  }

  & .vector {
    height: 12%;
    left: 7%;
    position: absolute;
    top: -1%;
    width: 45%;
  }

  & .icon-container {
    height: 28px;
    left: 6%;
    position: absolute;
    top: 0;
    width: 45%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  & .icon-shopping-cart {
    height: 17px;
    position: relative;
    width: 17px;
  }

  & .icon-heart {
    height: 17px;
    position: relative;
    width: 19px;
  }

  & .lorem-ipsum-is {
    height: 34px;
    left: 1px;
    position: relative;
    width: 162px;
  }
`;

export const FrameCard = () => {
  return (
    <StyledFrame>
      <div className="overlap-group-card">
        <img className="vector" alt="Vector" src={iconContainer} />
        <div className="icon-container">
          <img
            className="icon-shopping-cart"
            alt="Icon shopping cart"
            src={cart}
          />
          <img className="icon-heart" alt="Icon heart" src={heart} />
        </div>
        <img className="overlap-group-card" alt="Vector" src={CardContainer} />
        <div
          style={{
            marginLeft: "15px",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
      </div>
    </StyledFrame>
  );
};
