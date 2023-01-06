import React from "react";
import "../css/gradientbButton.css";

export default function GradientButton({ text }) {
  return (
    <div>
      <span className="gd-button">
        <span className="gd-button-background"></span>
        <span className="gd-button-text">{text}</span>
      </span>
    </div>
  );
}
