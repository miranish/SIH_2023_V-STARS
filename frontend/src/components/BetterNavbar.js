import React, { useEffect, useState } from "react";
import gsap from "gsap";

import "../styles/BetterNavbar.css";

const BetterNavbar = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const cursorInner = document.querySelector(".cursor2");

    const close = document.querySelector(".close");
    const tl = gsap.timeline({
      defaults: { duration: 0.6, ease: "expo.inOut" },
    });

    const open = document.querySelector(".better-nav-container");

    open.addEventListener("click", () => {
      if (tl.reversed()) {
        tl.play();
      } else {
        tl.to("nav", { visibility: "visible", right: 0 })
          .to("nav", { height: "100vh" }, "-=.1")
          .to(
            "nav ul li a",
            { opacity: 1, pointerEvents: "all", stagger: 0.2 },
            "-=0.2"
          )
          .to(".close", { opacity: 1, pointerEvents: "all" }, "-=.8")
          .to("nav h2", { opacity: 1 }, "-=1")
          .then(cursor.classList.add("nav-hover"))
          .then(cursorInner.classList.add("nav-hover-inner"));
      }
    });

    close.addEventListener("click", () => {
      tl.reverse()
        .then(cursor.classList.remove("nav-hover"))
        .then(cursorInner.classList.remove("nav-hover-inner"));
    });
  }, []);

  return (
    <div className="better-nav-body">
      <div className="better-nav-container" id="menu">
        <div className="bars"></div>
      </div>
      <nav className="better-nav">
        <div className="close">
          <div></div>
        </div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/aboutus">About Us</a>
          </li>
          <li>
            <a href="/trade">Trade</a>
          </li>
          <li>
            <a href="/india">Explore India</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BetterNavbar;
