import React, { useEffect } from "react";
import "../styles/SliderButton.css";

const SliderButton = () => {
  useEffect(() => {
    const toggle = document.getElementById("toggle");
    const toggleDiv = document.getElementById("toggle-div");

    toggle.addEventListener("change", function (e) {
      e.preventDefault();
      if (toggle.checked) {
        toggleDiv.classList.remove("night");
      } else {
        toggleDiv.classList.add("night");
      }
    });

  }, []);

  return (
    <label htmlFor="toggle" id="toggle-label">
      <div id="toggle-div" className="night">
        <input type="checkbox" id="toggle" />
        <div className="clouds">
          <div className="cloud cloud-1"></div>
          <div className="cloud cloud-2"></div>
          <div className="cloud cloud-3"></div>
          <div className="cloud cloud-4"></div>
          <div className="cloud cloud-5"></div>
        </div>
        <div className="backdrops">
          <div className="backdrop"></div>
        </div>
        <div className="stars">
          <div className="star star-1"></div>
          <div className="star star-2"></div>
          <div className="star star-3"></div>
        </div>
        <div className="sun-moon">
          <img
            src="https://cdn.discordapp.com/attachments/1149573938469404693/1155110921040035880/image.png"
            alt="Sun/Moon"
            className="sun-image shadowed"
          />
          <div className="crater"></div>
        </div>
      </div>
    </label>
  );
}

export default SliderButton;
