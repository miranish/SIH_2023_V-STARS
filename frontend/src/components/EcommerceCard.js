import "../styles/EcommerceCard.css";

export const EcommerceCard = () => {
  return (
    <div className="eco-card">
      <div className="side-icons"></div>
      <div className="main-card"></div>
      <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
        <clipPath id="customClipPath">
          <path
            d="M1.5 612V181.5C1.5 153.886 23.8858 131.5 51.5 131.5H182C209.614 131.5 232 109.114 232 81.5V51.5C232 23.8858 254.386 1.5 282 1.5H372C399.614 1.5 422 23.8858 422 51.5V131.5V612C422 639.614 399.614 662 372 662H51.5C23.8858 662 1.5 639.614 1.5 612Z"
            stroke="white"
            strokeWidth="3"
          />
        </clipPath>
      </svg>
    </div>
  );
};
