// src/components/LandingPage.js
import "../styles/Home.css";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clouds_1 from "../assets/HomePage/clouds_1.png";
import clouds_2 from "../assets/HomePage/clouds_2.png";
import bg from "../assets/HomePage/full.png";
import fg from "../assets/HomePage/man2.png";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
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

    gsap.to("#text", {
      scrollTrigger: {
        scrub: 1,
      },
      y: 800,
    });

    gsap.fromTo(
      "#heading",
      {
        x: -50,
      },
      {
        x: "420px",
        scrollTrigger: {
          start: "100px",
          end: "600px",
          scrub: 4,
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

    // Add other GSAP animations here
  }, []);

  return (
    <div>
      <section className="section">
        <img src={bg} id="bg" alt="bg" />
        <h2 id="text">INDIAN HERITAGE</h2>
        <img src={fg} alt="man2" id="man" />
        <img src={clouds_1} alt="cloud1" id="cloud1" />
        <img src={clouds_2} alt="cloud2" id="cloud2" />
      </section>
      <div class="arrow">↓</div>
      <div class="sec">
        <h2 id="heading">About India!</h2>
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
