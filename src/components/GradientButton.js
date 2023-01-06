import React from "react";
import "../css/gradientbButton.css";

export default function GradientButton({ text }) {
  return (
    <div>
      <span class="gd-button">
        <span class="gd-button-background"></span>
        <span class="gd-button-text">{text}</span>
      </span>
    </div>
  );
}
