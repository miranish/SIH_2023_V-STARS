import React from "react";
import "../styles/Home.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import image from "../assets/Parallax/Firefly.png";
import image2 from "../assets/Parallax/Layer_2-removebg.png";
import bgimage from "../assets/himalayas-mountain-bg.jpg";
import SliderButton from "../components/SliderButton";

const Home = () => {
  const navbarStyle = {
    position: "fixed",
    backgroundColor: "transparent",
    color: "#FFFFFF",
    transition: "background-color 0.5s ease",
  };

  const containerStyle = {
    maxWidth: "100%",
  };

  const brandStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    textDecoration: "none",
    color: "#FFFFFF",
  };

  const navItemStyle = {
    marginLeft: "0.5rem",
  };

  const navLinkStyle = {
    color: "#FFFFFF",
    textDecoration: "none",
  };

  const wrapperStyle = {
    // background: `url('http://demos.creative-tim.com/paper-kit-2/assets/img/antoine-barres.jpg')`,
    background: `url('${image}  ')`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    position: "relative",
    minHeight: "100vh",
  };

  const titleBrandStyle = {
    textAlign: "center",
  };

  const presentationTitleStyle = {
    fontSize: "4rem",
  };

  const presentationSubtitleStyle = {
    textAlign: "center",
    marginTop: "1rem",
  };

  return (
    <div>
      <nav
        style={navbarStyle}
        className="navbar navbar-toggleable-md fixed-top"
      >
        <div className="container" style={containerStyle}>
          <div className="navbar-translate">
            <button
              className="navbar-toggler navbar-toggler-right navbar-burger"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggler"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-bar"></span>
              <span className="navbar-toggler-bar"></span>
              <span className="navbar-toggler-bar"></span>
            </button>
            <a
              href="https://www.example.com"
              className="navbar-brand"
              style={brandStyle}
            >
              LOGO
            </a>
          </div>
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav ml-auto" style={navItemStyle}>
              {/* <li className="nav-item">
                <a
                  className="nav-link"
                  rel="tooltip"
                  title="Follow us on Twitter"
                  data-placement="bottom"
                  href="https://twitter.com/"
                  target="_blank"
                  style={navLinkStyle}
                >
                  <i className="fa fa-twitter"></i>
                  <p className="hidden-lg-up">Twitter</p>
                </a>
              </li> */}
              {/* Add similar items for Facebook, Instagram, GitHub */}
              {/* <li className="nav-item">
                <a href="https://www.example.com" target="_blank" className="btn btn-danger btn-round">
                  Login
                </a>
              </li> */}
              <li>
                <SliderButton />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Parallax pages={2} style={{ top: "0", left: "0" }}>
        <ParallaxLayer offset={0}>
          <div className="wrapper">
            <div className="page-header section-dark" style={wrapperStyle}>
              <div className="filter"></div>
              <div className="content-center">
                <div className="container">
                  <div className="title-brand" style={titleBrandStyle}>
                    <h1
                      className="presentation-title "
                      style={presentationTitleStyle}
                    >
                      INDIAN HERITAGE
                    </h1>
                    <div className="fog-low">
                      <img
                        src="http://demos.creative-tim.com/paper-kit-2/assets/img/fog-low.png"
                        alt=""
                      />
                    </div>
                    <div className="fog-low right">
                      <img
                        src="http://demos.creative-tim.com/paper-kit-2/assets/img/fog-low.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <h2
                    className="presentation-subtitle"
                    style={presentationSubtitleStyle}
                  >
                    Headline
                  </h2>
                </div>
              </div>
              <div
                className="moving-clouds"
                style={{
                  backgroundImage:
                    "url('http://demos.creative-tim.com/paper-kit-2/assets/img/clouds.png')",
                }}
              ></div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={1}>
            <p
              style={{
                background: `url('${image2}')`,
                height: "100vh",
                backgroundSize: "cover",
                

              }}
            >
              Parallax
            </p>
          </ParallaxLayer>
        <ParallaxLayer offset={2} speed={2}>
          <p
            style={{
              background: `url('${image}')`,
              height: "120vh",
              backgroundSize: "cover",
            }}
          >
            Parallax
          </p>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Home;
