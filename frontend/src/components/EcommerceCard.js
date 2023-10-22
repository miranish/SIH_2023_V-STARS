import "../styles/EcommerceCard.css";
import flower from "../assets/ecom/Flower.png"


export const EcommerceCard = ({ImgSrc, imgIndex, title}) => {
  return (
    <div className="overlap-eco-card"
    style={{
      scale: imgIndex === 3 ? "1.2" : "1", 
    }}
    >
      <div className="eco-card-title">
        {title}
      </div>
      <div>
        <img src={flower} alt="" className="flower-up"/>
        <img src={flower} alt="" className="flower-down"/>
      </div>

      <img
        className="eco-card-image"
        alt="Rectangle"
        src={ImgSrc}
      />
    </div>
  );
};
