import React, { useEffect, useState, useRef } from "react";
import "../styles/Rajasthan.css";
import "material-icons/iconfont/material-icons.css";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";

const StatePage = () => {
  const [currentStateImage, setCurrentStateImage] = useState([
    "https://images.unsplash.com/photo-1638904998527-a451c1fbd1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1622993005631-163d6f8b4485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  ]);

  const [currentCardStateImage, setCurrentCardStateImage] = useState([
    "https://images.unsplash.com/photo-1586612438666-ffd0ae97ad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    "https://images.unsplash.com/photo-1616693139578-f1c17deb0d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
    "https://images.unsplash.com/photo-1587295656906-b06dca8f2340?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
  ]);

  const [stateTitle, setStateTitle] = useState("");
  const [stateDesc, setStateDesc] = useState("");

  const [currentIndex, setCurrentIndex] = useState(1);
  const [currentBgImageIndex, setCurrentBgImageIndex] = useState(0);

  const SlideRef = useRef(null);

  const apiEndpoint = "http://localhost:3001/api/states/";

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function fetchData(stateName) {
    const response = await fetch(apiEndpoint + stateName);
    const data = await response.json();
    console.log(data);
    setCurrentStateImage(data.ImagesData.map((item) => item.bgImage));
    setCurrentCardStateImage(data.ImagesData.map((item) => item.cardImage));
    setStateTitle(data.stateName);
    setStateDesc(data.stateDesc);

    console.log(stateTitle);
    console.log(stateDesc);
    console.log("BG IMAGE:", currentStateImage);
    console.log("CARD IMAGE:", currentCardStateImage);
  }

  useEffect(() => {
    if (SlideRef.current) {
      console.log("REF ", SlideRef.current.splide.go(1));
    }
    const stateName =
      window.location.href.split("/")[
        window.location.href.split("/").length - 1
      ];
    fetchData(stateName);
    console.log(stateName);
    let items = document.querySelectorAll(".slider .item");
    let next = document.getElementById("next");
    let prev = document.getElementById("prev");

    let active = 1;

    function loadShow() {
      let stt = 0;
      let bgstt = -1;

      // Move the bg element selection inside loadShow function
      let bg = document.getElementById("bgImage-container");

      items[active].style.transform = `none`;
      items[active].style.zIndex = 2;
      items[active].style.filter = "none";
      items[active].style.opacity = 1;

      for (var i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${
          1 - 0.2 * stt
        }) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = "blur(5px)";
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
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
      }
    }
    loadShow();

    next.onclick = function () {
      SlideRef.current.splide.go("+1");
      active = active + 1 < items.length ? active + 1 : active;
      setCurrentIndex(active);
      loadShow();
    };
    prev.onclick = function () {
      SlideRef.current.splide.go("-1");
      active = active - 1 >= 0 ? active - 1 : active;
      setCurrentIndex(active);
      loadShow();
    };
  }, []);

  return (
    <div>
      <div
        style={{
          position: "absolute",
        }}
      >
        <Splide
          options={{
            lazyLoad: "nearby",
          }}
          ref={SlideRef}
          id="mycustomsplide"
          aria-label="State BG Images"
        >
          {currentStateImage.map((imageUrl, index) => (
            <SplideSlide key={index}>
              <img
                style={{
                  borderRadius: "0px",
                  // height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
                src={imageUrl}
                alt={`Slide ${index + 1}`}
                loading="lazy"
              ></img>
            </SplideSlide>
          ))}
        </Splide>
      </div>

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
          <h1 className="state-title">{stateTitle}</h1>
          <p
            className="text-justify state-desc"
            style={{
              paddingTop: "1vw",
              color: currentIndex === 1 ? "black" : "",
            }}
          >
            {stateDesc}
          </p>
        </div>

        <div
          style={{
            zIndex: 2,
          }}
          className="col-6 d-flex justify-content-center align-items-center"
        >
          <div className="slider">
            <div
              className="item"
              style={{
                backgroundImage: `url('${currentCardStateImage[0]}`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              className="item"
              style={{
                backgroundImage: `url('${currentCardStateImage[1]}`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            <div
              className="item"
              style={{
                backgroundImage: `url('${currentCardStateImage[2]}`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            <button
              id="prev"
              data-slide="prev"
              href="#carouselExampleIndicators"
              role="button"
            >
              {" "}
              &#60;{" "}
            </button>
            <button
              id="next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              {" "}
              &#62;{" "}
            </button>
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
        className={`rajasthan-third-screen ${
          currentIndex === 2 ? "d-block" : "d-none"
        } part-3`}
        style={{ height: "100vh" }}
      >
        <navbara />
        mklnfklm
      </div>
    </div>
  );
};

export default StatePage;
