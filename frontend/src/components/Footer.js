import React from "react";
import "../styles/Footer.css";
export  const Footer = () => {
  const SocialUrls = [
    {
      id: "1",
      name: "Vishvara",
      IG: "https://www.instagram.com/vish_vishvara",
      LI: "https://www.linkedin.com/in/vishvara-gandharv-17aa4728b/",
      GH: "https://github.com/vishvara-sharda",
    },
    {
      id: "2",
      name: "Rahul Sahani",
      IG: "https://www.instagram.com/shemademeapoetry/",
      LI: "https://www.linkedin.com/in/rahul-sahani-472201237/",
      GH: "https://github.com/Rahul-Sahani04",
    },
    {
      id: "3",
      name: "Shyam Singh Negi",
      IG: "https://www.instagram.com/shyamsinghnegi/",
      LI: "#",
      GH: "https://github.com/shyamsinghnegi",
    },
    {
      id: "4",
      name: "Mir Anish",
      IG: "https://www.instagram.com/miranish25/",
      LI: "https://www.linkedin.com/in/mir-anish-a2132b223/",
      GH: "https://github.com/miranish",
    },
    {
      id: "5",
      name: "Swayam Sharma",
      IG: "https://www.instagram.com/swayam_.03/",
      LI: "https://www.linkedin.com/in/swayam-sharma/",
      GH: "https://github.com/Swayam4002",
    },
    {
      id: "6",
      name: "Tushar Gupta",
      IG: "https://www.instagram.com/tu_shhhhr/",
      LI: "https://www.linkedin.com/in/tushar-gupta-5666ba23b/",
      GH: "https://github.com/tushar21014",
    },
  ];

  return (
    <footer
      className="text-white mt-5 p-4 text-center "
      id="my-footer"
      style={{
        fontFamily: "Inknut Antiqua",
        height: "80vh",
        borderTop: "2px solid black",
        backgroundImage: "url('https://www.hdwallpapers.in/download/tricolor_indian_flag_independence_day_4k_hd_indian_flag-3840x2160.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1
        style={{
          fontFamily: "Inknut Antiqua",
          color: "black",
          marginTop: "5%",
          marginLeft: "5%",
        }}
        className="text-left m-10"
      >
        About Us
      </h1>
      <div
        style={{
          height: "60%",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          marginTop: "5%",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "60%",
            borderRight: "2px solid black",

            color: "black",
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          <h2 className="Footer-Title">You know?</h2>
          <h3>We Have</h3>
          <ul
            className="WeKnow"
            style={{
              listStyleType: "none",
              listStylePosition: "inside",
              textAlign: "left",
              position: "absolute",
              top: "25%",
              left: "28%",
            }}
          >
            <li>Clothings</li>
            <li>Jewellery</li>
            <li>Handicrafts</li>
            <li>Spices</li>
            <li>Instruments</li>
            <li>Art Works</li>
          </ul>
        </div>

        <div
          style={{
            height: "100%",
            width: "100%",
            borderRight: "2px solid black",
          }}
        >
          <h2 className="Footer-Title">Know us!</h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              height: "80%",
              width: "100%",
              marginTop: "10%",
            }}
          >
            <div
              style={{
                height: "100%",
                width: "100%",
                borderRight: "2px solid black",
              }}
            >
              <h3 className="footer-subtitle">Instagram</h3>
              <ul
                className="content"
                style={{
                  listStyleType: "none",
                  textAlign: "left",
                }}
              >
                {SocialUrls.map((item) => (
                  <li key={item.id}>
                    <a href={item.IG} target="_blank" rel="noreferrer">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div
              style={{
                height: "100%",
                width: "100%",
                borderRight: "2px solid black",
              }}
            >
              <h3 className="footer-subtitle">GitHub</h3>
              <ul
                className="content"
                style={{
                  listStyleType: "none",
                  textAlign: "left",
                }}
              >
                {SocialUrls.map((item) => (
                  <li key={item.id}>
                    <a href={item.GH} target="_blank" rel="noreferrer">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div
              style={{
                height: "100%",
                width: "100%",
              }}
            >
              <h3 className="footer-subtitle">LinkedIn</h3>
              <ul
                className="content"
                style={{
                  listStyleType: "none",
                  textAlign: "left",
                }}
              >
                {SocialUrls.map((item) => (
                  <li key={item.id}>
                    <a href={item.LI} target="_blank" rel="noreferrer">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          style={{
            height: "100%",
            width: "90%",
            borderRight: "2px solid black",
          }}
        >
          <h2 className="Footer-Title">Contact us!</h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              height: "80%",
              width: "100%",
              marginTop: "10%",
            }}
          >
            <div
              style={{
                height: "100%",
                width: "100%",
                // borderRight: "2px solid black",
                marginLeft: "10px",
                textAlign: "left",
              }}
            >
              <h3 className="footer-subtitle">E-mail</h3>
              <h4 className="footer-subtitle-content">v.stars@gmail.com</h4>
              <h3
                className="footer-subtitle"
                style={{
                  marginTop: "40px",
                }}
              >
                Phone
              </h3>
              <h4 className="footer-subtitle-content">95124XXXX</h4>
            </div>
            {/* <div
              style={{
                height: "100%",
                width: "100%",
              }}
            >
            </div> */}
          </div>
        </div>

        <div
          style={{
            height: "100%",
            width: "60%",
          }}
        >
          <h2 className="Footer-Title">Copyright</h2>
          <ul
            className="content"
            style={{
              listStyleType: "none",
              textAlign: "left",
            }}
          >
            <li>Privacy Policy</li>
            <li>Term of use</li>
            <li style={{ textDecoration: "solid" }}>Don’t sell our Info</li>
          </ul>
          <div className="company-name">ⓒ V-STARS</div>
        </div>
      </div>
    </footer>
  );
};
