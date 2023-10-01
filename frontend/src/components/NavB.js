import React from "react";
import "../styles/NavB.css";
import { useNavigate } from "react-router-dom";
export default function NavB() {
  const navigate = useNavigate();

  function goTo(url) {
    navigate(url);
  }
  return (
    <div className="dk">
      <div className="dk-dv">
        <div className="nb-ov">
          <div className="rect1" />
          <div className="rect2" />
          <div className="tw nav-link-effect" onClick={() => goTo("/")}>
            Home
          </div>
          <div className="tw2 nav-link-effect" onClick={() => goTo("/about")}>
            About Us
          </div>
          <div className="rect" />
          <div className="tw3 nav-link-effect" onClick={() => goTo("/india")}>
            Explore India
          </div>
        </div>
      </div>
    </div>
  );
}
