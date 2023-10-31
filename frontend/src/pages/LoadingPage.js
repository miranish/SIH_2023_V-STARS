import "../styles/LoadingPage.css"

export const LoadingPage = ({percentage}) => {
  return (
    <div id="loading-wrapper">
      <div id="loading-text">LOADING {percentage}</div>
      <div id="loading-content"></div>
    </div>
  );
};
