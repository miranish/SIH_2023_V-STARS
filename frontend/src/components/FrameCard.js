import "../styles/FrameCard.css";

export const FrameCard = ({ src, title }) => {
  return (
    <div className="frame-card">
      <div className="clothes2">
        <div className="overlap-group2">
          <img className="img2" alt="Clothes" src={src} />
        </div>
        <div className="overlap2">
          <div className="rectangles" />
          <div className="text-title2">{title}</div>
        </div>
      </div>
    </div>
  );
};
