import "../styles/EcommercePage.css";
import { EcommerceCard } from "../components/EcommerceCard";

import flower from "../assets/ecom/Flower2.png";

import imagesData from "../assets/ecom/E_COMMERCE_CardData/eComCardData";

import { WeHaveMoreImageData } from "../assets/ecom/WeHaveMore/WeHaveMoreData";

import largeImage2 from "../assets/ecom/highdressNew1.png";
import largeImage1 from "../assets/ecom/highdressNew2.png";
import { EcommerceCard2 } from "../components/EcommerceCard2";

import JFY from "../assets/ecom/JFY.png";

import Hottest from "../assets/ecom/Hottest.png";

import SoDidYouLike from "../assets/ecom/SoWhatDidYouLikeBG.png";
import { Footer } from "../components/Footer";
import EcoNavbar from "../components/Navbar";

export const TradePage = () => {
  return (
    <div className="index">
    <EcoNavbar />
      <div class="Categories-Intro">
        <img
          class="vector-3"
          alt="Vector"
          src="https://cdn.animaapp.com/projects/650f1ee92865bcdb6c94e11b/releases/6534bbcdb7efa3aba72a877c/img/vector-4.svg"
        />

        <img class="flower-3" alt="Flower" src={flower} />

        <div class="Categories-Intro-Title">CATEGORIES</div>
      </div>
      <div class="scrolling-wrapper-flexbox">
        {imagesData.map((card, index) => (
          <EcommerceCard
            key={index}
            imgIndex={index}
            title={card.title}
            ImgSrc={card.imgSrc}
          />
        ))}
      </div>

      <div className="dress-showcase-section">
        <div className="rectangle-showcase">
          <div className="rectangle-showcase-1"></div>
          <img
            className="largeImages largeImages1"
            src={largeImage1}
            alt="LargeImage1"
          />
        </div>

        <div className="rectangle-showcase">
          <div className="rectangle-showcase-2"></div>
          <img
            className="largeImages largeImages2"
            src={largeImage2}
            alt="LargeImage2"
          />
        </div>
      </div>
      <div
        className="just-for-you"
        style={{
          height: "100vh",
        }}
      >
        <div
          style={{
            backgroundImage: `url('${JFY}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "36%",
            height: "12%",
            marginTop: "5%",
            marginLeft: "5%",
          }}
          className="title-jfy"
        ></div>
        <div
          class="scrolling-wrapper-flexbox"
          style={{
            height: "70%",
          }}
        >
          <EcommerceCard2 />
          <EcommerceCard2 />
          <EcommerceCard2 />
          <EcommerceCard2 />
          <EcommerceCard2 />
          <EcommerceCard2 />
          <EcommerceCard2 />
        </div>
      </div>

      <div
        className="hottest-section"
        style={{
          height: "150vh",
          width: "100vw",
          position: "relative",
        }}
      >
        <img
          src={Hottest}
          style={{
            width: "98%",
            height: "95%",
            marginLeft: "1%",
            position: "absolute",
          }}
        />
        <div class="Hottest-card-containers">
          <EcommerceCard2 />
          <EcommerceCard2 />
          <EcommerceCard2 />
          <EcommerceCard2 />
        </div>
        <div
          class="Hottest-card-containers"
          style={{
            top: "55%",
          }}
        >
          <EcommerceCard2 />
          <EcommerceCard2 />
          <EcommerceCard2 />
          <EcommerceCard2 />
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url('${SoDidYouLike}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          width: "100vw",
          height: "100vh",
          position: "relative",
        }}
      >
        <h1
          style={{
            position: "absolute",
            top: "55%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: "Inknut Antiqua",
            fontSize: "50px",
          }}
        >
          So what did you like?
        </h1>
        <h3
          style={{
            position: "absolute",
            bottom: "20%",
            right: "10%",
            fontFamily: "Inknut Antiqua",
          }}
        >
          Pssst! we have more
        </h3>
      </div>

      <div
        className="weHaveMoreSection"
        style={{ width: "100%", overflowX: "auto" }}
      >
        {WeHaveMoreImageData.map((image, index) => (
          <div
            key={index}
            className="WHM-image"
            style={{
              backgroundImage: `url('${image.imageSrc}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              width: "50%", // Set a fixed width
              height: "85%",
              marginLeft: "5%",
              flex: "0 0 auto",
            }}
          ></div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default TradePage;
