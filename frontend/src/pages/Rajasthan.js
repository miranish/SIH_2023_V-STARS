import React, { useEffect, useState } from "react";
import "../styles/Rajasthan.css";

const Rajasthan = () => {
  const [currentStateImage, setCurrentStateImage] = useState([
    // "https://images.unsplash.com/photo-1593681645570-83083d750183?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    "https://images.unsplash.com/photo-1638904998527-a451c1fbd1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1622993005631-163d6f8b4485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  ]);
  const [currentIndex, setCurrentIndex] = useState(1);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    let items = document.querySelectorAll(".slider .item");
    let next = document.getElementById("next");
    let prev = document.getElementById("prev");

    let bg = document.querySelectorAll("#bgImage");

    let active = 1;
    function loadShow() {
      let stt = 0;
      let bgstt = -1;
      items[active].style.transform = `none`;
      items[active].style.zIndex = 2;
      items[active].style.filter = "none";
      items[active].style.opacity = 1;
      
      bg[active].style.display = "flex";
      bg[active].style.transform = `none`;
      bg[active].style.zIndex = 2;
      bg[active].style.filter = "none";
      bg[active].style.opacity = 1;

      for (var i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${
          1 - 0.2 * stt
        }) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = "blur(5px)";
        items[i].style.opacity = stt > 2 ? 0 : 0.6;

        bg[i].style.display = "none"
        bg[i].style.transform = `translateX(${120 * stt}px)`;
        bg[i].style.zIndex = -bgstt;
        bg[i].style.filter = "blur(5px)";
        bg[i].style.opacity = bgstt > 2 ? 0 : 0.6;
      }
      stt = 0;
      for (var i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${
          1 - 0.2 * stt
        }) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = "blur(5px)";
        items[i].style.opacity = stt > 2 ? 0 : 0.8;

        bg[i].style.transform = `translateX(${-120 * stt}px)`;
        bg[i].style.zIndex = -bgstt;
        bg[i].style.filter = "blur(5px)";
        bg[i].style.opacity = bgstt > 2 ? 0 : 0.8;
        bg[i].style.display = "none"
      }
    }
    loadShow();
    next.onclick = function () {
      active = active + 1 < items.length ? active + 1 : active;
      setCurrentIndex(active);

      bg[active].classList.add("swipeLeft");
      bg[active - 1].classList.add("swipeLeft");
      loadShow();

      // Remove classes after animation completes
      setTimeout(() => {
        bg[active - 1].classList.remove("swipeLeft");
      }, 600); // Adjust the time to match your CSS animation duration
    };
    prev.onclick = function () {
      active = active - 1 >= 0 ? active - 1 : active;
      setCurrentIndex(active);

      // Add classes to trigger CSS animations
      bg[active].classList.add("swipeRight");
      bg[active + 1].classList.add("swipeRight");
      loadShow();

      // Remove classes after animation completes
      setTimeout(() => {
        bg[active + 1].classList.remove("swipeRight");
      }, 600); // Adjust the time to match your CSS animation duration
    };
  }, []);

  return (
    <div>
      <div
        className="rajasthan-carousel-first-screen"
        id="bgImage"
        style={{
          backgroundImage: `url('${currentStateImage[0]}')`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          transition: "all 600ms ease-in-out",
          position: "absolute",
          zIndex: 0,
        }}
      ></div>
      <div
        className="rajasthan-carousel-first-screen"
        id="bgImage"
        style={{
          backgroundImage: `url('${currentStateImage[1]}')`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          transition: "all 600ms ease-in-out",
          position: "absolute",
          zIndex: 0,
        }}
      ></div>
      <div
        className="rajasthan-carousel-first-screen"
        id="bgImage"
        style={{
          backgroundImage: `url('${currentStateImage[2]}')`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          transition: "all 600ms ease-in-out",
          position: "absolute",
          zIndex: 0,
        }}
      ></div>
      <div className="row">
        <div className="col-2"></div>
        <div
          className="col-4 second-row-text"
          style={{
            height: "100vh",
            flexDirection: "column",
            alignItems: "flex-start",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1>Rajasthan</h1>
          <p className="text-justify" style={{ paddingRight: "4vw" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
            magni magnam unde ipsam repudiandae explicabo expedita labore,
          </p>
        </div>
        <div className="col-6 d-flex justify-content-center align-items-center">
          <div className="slider">
            <div
              className="item"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1587295656906-b06dca8f2340?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              className="item"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1616693139578-f1c17deb0d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            <div
              className="item"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1586612438666-ffd0ae97ad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            <button id="prev"> &#60; </button>
            <button id="next"> &#62; </button>
          </div>
        </div>
      </div>
      <div
        className={`rajasthan-second-screen ${
          currentIndex === 0 ? "d-block" : "d-none"
        } part-1`}
        style={{ height: "100vh" }}
      >
        first
      </div>
      <div
        className={`rajasthan-second-screen ${
          currentIndex === 1 ? "d-block" : "d-none"
        } part-2`}
        style={{ height: "100vh" }}
      >
        second
      </div>
      <div
        className={`rajasthan-second-screen ${
          currentIndex === 2 ? "d-block" : "d-none"
        } part-3`}
        style={{ height: "100vh" }}
      >
        mklnfklm
      </div>
    </div>
  );
};

export default Rajasthan;
