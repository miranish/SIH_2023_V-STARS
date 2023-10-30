import "../styles/EcommercePage2Card.css";

export const EcommercePage2Card = ({ title, images, popularity }) => {
  return (
    <div class="eco-page2-card">
      <h3 class="eco-page2-card-title">{title}</h3>
      <div class="eco-page2-card-body">
        <div className="eco-page2-card-inside">
          <div
            className="eco-page2-card-inside-img"
            style={{
              backgroundImage: `url('${images[0]}')`,
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          ></div>
          <h4 className="eco-page2-men">Men</h4>
          <h4>Men</h4>
        </div>
        <div className="eco-page2-card-inside">
          <div
            className="eco-page2-card-inside-img"
            style={{
              backgroundImage: `url('${images[1]}')`,
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          ></div>
          <h4 className="eco-page2-men">Women</h4>
          <h4>Women</h4>
        </div>
      </div>
      <p className="eco-page2-popularity">
        <i class="fa fa-heart" style={{ color: "#ff0000" }}></i> {popularity}
      </p>
    </div>
  );
};
