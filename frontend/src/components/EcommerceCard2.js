import "../styles/EcommerceCard2.css";
import flower from "../assets/ecom/E_COMMERCE_CardData2/Flower 4.png";
import mainCard from "../assets/ecom/E_COMMERCE_CardData2/Vector 1.png";
import mainCard2 from "../assets/ecom/E_COMMERCE_CardData2/Vector 2.png";

import buttons from "../assets/ecom/E_COMMERCE_CardData2/Frame 2.png";

export const EcommerceCard2 = ({ ImgSrc, imgIndex, title, desc }) => {
  return (
    <div
      className="overlap-eco-card2"
      style={{
        scale: imgIndex === 3 ? "1.2" : "1",
      }}
    >
      <div
        className="eco-card2-buttons"
        style={{
          background: `url('${mainCard2}')`,
          backgroundSize: "cover",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
      <div
        style={{
          background: `url('${buttons}')`,
          backgroundSize: "cover",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "80%",
          height: "100%",
        }}
      
      >

      </div>
        {/* <div className="wishlist-button">
          
        </div>
        <div className="cart-button">

        </div> */}

      </div>
      <div>
        <img src={flower} alt="" className="flower-mid" />
      </div>

      <img className="eco-card-image2" alt="Rectangle" src={mainCard} />
      <div className="eco-card-desc2">
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
      </div>
    </div>
  );
};
