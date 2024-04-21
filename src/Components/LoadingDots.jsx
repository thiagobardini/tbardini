import Lottie from "lottie-react";
import dots from "../Assets/animations/dots.json"

export default function LoadingDots() {
  return (
    <Lottie
      animationData={dots}
      style={{
        height: "20px",
        width: "auto",
      }}
    />
  );
}
