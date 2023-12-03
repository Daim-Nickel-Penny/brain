import React from "react";
import "./FeaturedContentList.css"; // Import your CSS styles here

const FeaturedContentList = ({ text, link, imageUrl }) => {
  return (
    <div onClick={() => window.open(link, "_blank")}>
      <img src={imageUrl} alt="Featured Content" />
      <h3>{text}</h3>
    </div>
  );
};

export default FeaturedContentList;
