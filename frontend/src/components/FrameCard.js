import "../styles/FrameCard.css";

export const FrameCard = ({ src, title }) => {
  return (
    <div className="box">
      <div className="clothes">
        <div className="overlap-group">
          <img className="img" alt="Clothes" src={src} />
        </div>
        <div className="overlap">
          <div className="rectangle" />
          <div className="text-wrapper">{title}</div>
        </div>
      </div>
    </div>
  );
};
