// src/components/LandingPage.js
import "../styles/Home.css";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
import arrowBorders from "../assets/HomePage/arrowBorders.png";
import arrowDots from "../assets/HomePage/arrowDots.png";
import arrowFull from "../assets/HomePage/arrowFull.png";
import arrowRotate from "../assets/HomePage/arrowRotate.png";
import rathBG from "../assets/HomePage/rathBG.png";
import rathFG from "../assets/HomePage/rathFG.png";
import NavbarTop from "../components/NavbarTop";
import IndianHeritageText from "../components/3dText";
import Navbarjs from "../components/Navbarr";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const navRef = useRef(null);
  useEffect(() => {
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

    gsap.to("#cloud1", {
      scrollTrigger: {
        scrub: 1,
      },
      x: 750,
    });

    gsap.to("#cloud2", {
      scrollTrigger: {
        scrub: 1,
      },
      x: -750,
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

    gsap.fromTo(
      navRef.current, // Use the ref for the navigation bar
      {
        opacity: 0,
        visibility: "hidden",
      },
      {
        opacity: 1,
        visibility: "visible",
        scrollTrigger: {
          trigger: "#heading",
          start: "top center",
          end: "+=200",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Add other GSAP animations here
  }, []);

  return (
    <div>
      <Navbarjs/>
      <section className="section">
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
      </setion>

      <section className="section2">
        {/* <img src={arrowBG} id="arrowBG" alt="arrowBG" />
        <img src={arrowBorders} id="arrowBorders" alt="arrowBorders" />
        <img src={arrowDots} id="arrowDots" alt="arrowDots" /> */}
        <img src={arrowRotate} id="arrowRotate" alt="arrowRotate" />
        <img src={arrowFG} id="arrowFG" alt="arrowFG" />
      </section>

      <section className="section3">
        <img src={rathBG} id="rathBG" alt="rathBG" />
        <img src={rathFG} id="rathFG" alt="rathFG" />
      </section>

      <setion className="section4">
        <img src={krishnaBG} id="krsnaBG" alt="krsnaBG" />
        <img src={krishnaFG} id="krsnaFG" alt="krsnaFG" />
      </setion>

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
      <NavbarTop id="nav" ref={navRef} />
      <div class="sec">
        <div id="heading">
          <h2 id="heading-h2">About India!</h2>
        </div>
        <br />
        <p id="para">
          India, officially the Republic of India (ISO: Bhārat Gaṇarājya), is a
          country in South Asia. It is the seventh-largest country by area; the
          most populous country as of June 2023; and from the time of its
          independence in 1947, the world's most populous democracy. Bounded by
          the Indian Ocean on the south, the Arabian Sea on the southwest, and
          the Bay of Bengal on the southeast, it shares land borders with
          Pakistan to the west; China, Nepal, and Bhutan to the north; and
          Bangladesh and Myanmar to the east. In the Indian Ocean, India is in
          the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar
          Islands share a maritime border with Thailand, Myanmar, and Indonesia.
          <br />
          <br />
          Modern humans arrived on the Indian subcontinent from Africa no later
          than 55,000 years ago. Their long occupation, initially in varying
          forms of isolation as hunter-gatherers, has made the region highly
          diverse, second only to Africa in human genetic diversity. Settled
          life emerged on the subcontinent in the western margins of the Indus
          river basin 9,000 years ago, evolving gradually into the Indus Valley
          Civilisation of the third millennium BCE. By 1200 BCE, an archaic form
          of Sanskrit, an Indo-European language, had diffused into India from
          the northwest. Its evidence today is found in the hymns of the
          Rigveda. Preserved by an oral tradition that was resolutely vigilant,
          the Rigveda records the dawning of Hinduism in India.
        </p>
      </div>
    </div>
  );
};

export default Home;
