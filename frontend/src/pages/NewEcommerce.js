import { EcommerceCard } from "../components/EcommerceCard";
import "../styles/EcommercePage.css";

export const TradePage = () => {
  return (
    <div
      className="eco-page"
      style={{
        height: "100vh",
      }}
    >
      <div className="eco-card-container">
        <EcommerceCard />
        <EcommerceCard />
        <EcommerceCard />
      </div>
    </div>
  );
};
