import "../styles/EcommercePage.css";
import { EcommerceCard } from "../components/EcommerceCard";

import flower from "../assets/ecom/Flower2.png";

import imagesData from "../assets/ecom/E_COMMERCE_CardData/eComCardData";

import largeImage2 from "../assets/ecom/highdressNew1.png";
import largeImage1 from "../assets/ecom/highdressNew2.png";
import { EcommerceCard2 } from "../components/EcommerceCard2";

export const TradePage = () => {
  return (
    <div className="index">
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
      <div className="just-for-you">
        <div className="title-jfy"></div>
        <div class="scrolling-wrapper-flexbox" style={{
          height: "70vh"
        }}>
          <EcommerceCard2 />
          <EcommerceCard2 />
          <EcommerceCard2 />
          <EcommerceCard2 />
          <EcommerceCard2 />
          <EcommerceCard2 />
          <EcommerceCard2 />
        </div>
      </div>
    </div>
  );
};

export default TradePage;
