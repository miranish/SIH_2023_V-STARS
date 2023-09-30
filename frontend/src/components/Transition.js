import Flag1 from "../assets/Transition/Layer0.png";
import Flag2 from "../assets/Transition/Layer1.png";
import Flag3 from "../assets/Transition/Layer2.png";

import "../styles/Transition.css";

export function OutroTransition() {
  return (
    <div
    className="mainTransition"
      style={{
        position: "absolute",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        zIndex: 5,
      }}
    >
      <img
        className={"flag flag-1"}
        src={Flag1}
        width={"75%"}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          alignSelf: "end",
        }}
      />

      <img
        className={"flag flag-2"}
        src={Flag2}
        width={"72%"}
        style={{
          position: "absolute",
          top: "0px",
          left: "0%",
          alignSelf: "end",
        }}
      />
      <img
        className={"flag flag-3"}
        src={Flag3}
        width={"100%"}
        style={{
          position: "absolute",
          right: "0%",
          bottom: "-2%",
          alignSelf: "end",
        }}
      />
    </div>
  );
}
