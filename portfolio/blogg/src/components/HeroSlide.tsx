import React from "react";

const HeroSlide = ({
  slide,
}: {
  slide: {
    bgImg: string;
    title: string;
    brief: string;
  };
}) => {
  return (
    <a
      href="#"
      id=""
      className="img-bg d-flex align-items-end"
      style={{ backgroundImage: `url(/${slide.bgImg})` }}
    >
      <div className="img-bg-inner">
        <h2>{slide.title}</h2>
        <p>{slide.brief}</p>
      </div>
    </a>
  );
};

export default HeroSlide;
