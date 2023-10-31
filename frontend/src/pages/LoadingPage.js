import "../styles/LoadingPage.css"
import { useEffect } from "react";

export const LoadingPage = ({percentage}) => {
  
  return (
    <div id="loading-wrapper">
      <div id="loading-text">LOADING <div key={percentage}> {percentage} </div></div>
      <div id="loading-content"></div>
    </div>
  );
};
