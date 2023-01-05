import React from "react";

export default function CoverPicture({ imgSrc, altText }) {
  return <img src={imgSrc} alt={altText} width="500rem" height={"200rem"} />;
}
