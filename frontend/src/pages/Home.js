// src/components/LandingPage.js
import "../styles/Home.css";
import React, { useState, useEffect } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

//images
import clouds_1 from "../assets/HomePage/clouds_1.png";
import clouds_2 from "../assets/HomePage/clouds_2.png";
import bg from "../assets/HomePage/full.png";
import fg from "../assets/HomePage/man2.png";
import ramayanBG from "../assets/HomePage/ramayanBG.png";
import ramayanFG from "../assets/HomePage/ramayanFG.png";
import krishnaBG from "../assets/HomePage/krishnaBG.png";
import krishnaFG from "../assets/HomePage/krishnaFG.png";
import arrowBG from "../assets/HomePage/arrowBG.png";
import arrowFG from "../assets/HomePage/arrowFG.png";
import arrowBGNew from "../assets/HomePage/RamHoverBG_Large.png";

import arrowBorders from "../assets/HomePage/arrowBorders.png";
import arrowDots from "../assets/HomePage/arrowDots.png";
import arrowFull from "../assets/HomePage/arrowFull.png";
import arrowRotate from "../assets/HomePage/arrowRotate.png";
import rathBG from "../assets/HomePage/rathBG.png";
import rathFG from "../assets/HomePage/rathFG.png";
import flybird from "../assets/HomePage/flybird.gif";
import birdy from "../assets/HomePage/birdy.gif";

import NavbarTop from "../components/NavbarTop";
import IndianHeritageText from "../components/3dText";

import Navbarjs from "../components/Navbarr";
import { Footer } from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [arrowBGNew1, setRathBgSrc] = useState(`${arrowBGNew}`);

  useEffect(() => {
    const RathBGImg = new Image();
    RathBGImg.src = "../assets/HomePage/RamHoverBG.png";
    RathBGImg.onload = () => {
      setRathBgSrc(RathBGImg.src);
    };

    gsap.to("#menu", {
      scrollTrigger: {
        trigger: "#my-footer",
        scrub: true,
      },
      start: "top 100%",
      y: "-790",
    });

    gsap.to("#menu", {
      x: 0,
      scrollTrigger: {
        trigger: ".section3",
        scrub: true,
        x: -500,
      },
    });

    gsap.to("#bg", {
      scrollTrigger: {
        scrub: 1,
      },
      scale: 1.5,
    });

    gsap.to("#man", {
      scrollTrigger: {
        scrub: 1,
      },
      scale: 0.5,
    });

    gsap.to("#rmynFG", {
      scrollTrigger: {
        marker: true,
        trigger: "#bird3",
        scrub: 1,
      },
      duration: 10,
      scrub: 1,
      x: -250,
      y: -50,
      scale: 0.7,
    });

    gsap.to("#cloud1", {
      x: 750,
      scrollTrigger: {
        scrub: 1,
      },
    });

    gsap.to("#cloud2", {
      x: -750,
      scrollTrigger: {
        scrub: 1,
      },
    });

    gsap.to("#krishnaBG", {
      scrollTrigger: {
        scrub: 2,
      },
      scale: 5,
    });

    gsap.to("#krishnaFG", {
      y: 1000,
      duration: 5,
      scrollTrigger: "#krishnaFG",
    });

    gsap.to("#text", {
      scrollTrigger: {
        scrub: 1,
      },
      y: 800,
    });

    gsap.to("#heading-h2", {
      scrollTrigger: {
        trigger: "#heading",
        scrub: 1,
      },
      x: "100%",
    });

    gsap.to(".arrowBGNew", {
      scrollTrigger: {
        trigger: ".section2",
        scrub: 1,
      },
      scale: 1.2,
    });

    gsap.to(".section2 #arrowRotate", {
      scale: 1,
      duration: 2.5,
      rotate: 360,
      scrollTrigger: {
        ease: "power2.inOut",
        trigger: ".section2",
        scroller: "body",
        // markers: true,
        // start: "top 20%",
        // end: "bottom 80%",
        scrub: true,
      },
    });

    gsap.fromTo(
      "#rathFG",
      { x: 200 },
      {
        duration: 3,
        x: 0,
        scrollTrigger: {
          ease: "power2.inOut",
          trigger: ".section3",
          scrub: 2,
        },
      }
    );

    gsap.to(".arrow", {
      // y: 50,
      opacity: 0,
      scrollTrigger: {
        trigger: ".arrow",
        start: "top center",
        end: "50% center",
        scrub: true,
      },
    });

    gsap.to("#bird5", {
      x: -1400,
      duration: 10,
      repeat: -1,
      repeatDelay: 0.5,
      scrollTrigger: {
        trigger: "#section2",
        // scrub: 1,
        start: "top -35%",
        end: "bottom 100%",
      },
    });
  }, []);

  return (
    <div>
      <Navbarjs />
      <section className="section" id="top-section">
        <img src={bg} id="bg" alt="bg" />
        {/* <IndianHeritageText /> */}
        <h2 id="text">INDIAN HERITAGE</h2>
        <img src={fg} alt="man2" id="man" />
        <img
          src={clouds_1}
          style={{
            position: "absolute",
          }}
          alt="cloud1"
          id="cloud1"
        />
        <img
          src={clouds_2}
          style={{
            position: "absolute",
          }}
          alt="cloud2"
          id="cloud2"
        />
      </section>

      <setion className="section1">
        <img src={ramayanBG} id="rmynBG" alt="rmynBG" />
        <img src={ramayanFG} id="rmynFG" alt="rmynFG" />
        <img
          src={require("../assets/HomePage/flybird.gif")}
          id="bird1"
          alt="bird"
        />
        <img
          src={require("../assets/HomePage/flybird.gif")}
          id="bird2"
          alt="bird"
        />
        <img
          src={require("../assets/HomePage/flybird.gif")}
          id="bird3"
          alt="bird"
        />
        <img
          src={require("../assets/HomePage/flybird.gif")}
          id="bird4"
          alt="bird"
        />
        {/* <img
          src={require("../assets/HomePage/birdy.gif")}
          id="bird5"
          alt="bird"
        /> */}
      </setion>

      <section className="section2">
        <img
          src={arrowBGNew1}
          id="arrowBG123"
          className="arrowBGNew"
          alt="Arrow BG Sky"
        />
        <img src={arrowRotate} id="arrowRotate" alt="arrowRotate" />
        <img src={arrowFG} id="arrowFG" alt="arrowFG" />
      </section>

      <section className="section3">
        <img src={rathBG} id="rathBG" alt="rathBG" />
        <img src={rathFG} id="rathFG" alt="rathFG" />
      </section>

      {/* 
      <setion className="section4">
        <img src={krishnaBG} id="krsnaBG" alt="krsnaBG" />
        <img src={krishnaFG} id="krsnaFG" alt="krsnaFG" />
      </setion> */}

      <svg
        className="arrow"
        width="40px"
        height="80px"
        viewBox="0 0 247 390"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "1.5",
        }}
      >
        <path
          id="wheel"
          d="M123.359,79.775l0,72.843"
          style={{ fill: "none", stroke: "#000000", strokeWidth: "20px" }}
        />
        <path
          id="mouse"
          d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
          style={{
            fill: "none",
            stroke: "#000000",
            strokeWidth: "20px",
          }}
        />
      </svg>
      {/* <p>Scroll down</p> */}
      <div class="sec">
        <div id="heading">
          <h2
            style={{
              textAlign: "center",
            }}
            //  id="heading-h2"
          >
            Explore the Heritage!
          </h2>
        </div>
        <br />
        <p id="para">
          India's Geographical Diversity: India is a vast subcontinent with
          diverse landscapes, from the snowy peaks of the Himalayas to the
          tropical beaches of Kerala. We'll take you on a virtual tour,
          showcasing the natural beauty and geographical features that have
          influenced India's heritage.
          <br />
          <br />
          Regional Diversity: India's heritage is a tapestry woven with threads
          of various regions. Explore the distinct cultures, languages, and
          traditions of North India, South India, East India, West India, and
          the central heartland. Learn about the uniqueness of each region, from
          the robust Rajput heritage of Rajasthan to the lush backwaters of
          Kerala.
          <br />
          <br />
          Time Travel through Dynasties: Discover the dynasties that have left
          an indelible mark on India's history. From the Mauryas and Guptas to
          the Mughals and Marathas, we'll provide insights into their reigns,
          architectural marvels, and cultural contributions.
        </p>
      </div>

      <div class="sec">
        <div id="heading">
          <h2
            style={{
              textAlign: "center",
            }}
          >
            A Glimpse of India's History!
          </h2>
        </div>
        <br />
        <p id="para">
          Indus Valley Civilization: Step back over 4,000 years to explore one
          of the world's oldest urban civilizations. Learn about the planned
          cities, script, and trade networks that characterized the Indus
          Valley.
          <br />
          <br />
          The Mughal Era: Immerse yourself in the opulence of the Mughal
          dynasty. Discover the iconic Taj Mahal, the grandeur of Red Fort, and
          the synthesis of Indian and Persian cultures during this period.
          <br />
          <br />
          Independence Struggle: Learn about India's arduous journey to
          independence from British colonial rule. Explore the life and
          teachings of Mahatma Gandhi and other prominent freedom fighters.
        </p>
      </div>

      <div class="sec">
        <div id="heading">
          <h2
            style={{
              textAlign: "center",
            }}
          >
            Art and Architecture!
          </h2>
        </div>
        <br />
        <p id="para">
          Temples of Khajuraho: Marvel at the intricate erotic carvings of
          Khajuraho, a UNESCO World Heritage site. Discover the symbolism behind
          these stunning sculptures.
          <br />
          <br />
          Ellora and Ajanta Caves: Explore the ancient rock-cut caves of Ellora
          and Ajanta, adorned with exquisite paintings and sculptures that
          depict the evolution of Indian art over centuries.
          <br />
          <br />
          Forts and Palaces: India boasts an array of magnificent forts and
          palaces, from the Amber Fort in Jaipur to the Mysore Palace. Learn
          about their architecture, history, and the stories they hold.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
