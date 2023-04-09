import React from "react";
import "../css/gradientbButton.css";
import audioFile from "../assets/welcome.mp3";

export default function GradientButton({ text }) {
  const handleButtonClick = () => {
    const audio = new Audio(audioFile);
    audio.play();
  };
  return (
    <div>
      <span className="gd-button" onClick={handleButtonClick}>
        <span className="gd-button-background"></span>
        <span className="gd-button-text">{text}</span>
      </span>
    </div>
  );
}
