import React from "react";
import Slider from "react-slick";
import { LeftArrow } from "../index";
import RightArrow from "../RightArrow";

interface ISlickSlider {
  children: JSX.Element[];
}
const SlickSlider: React.FC<ISlickSlider> = ({ children }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <div>
      <div className="main-category__wrapper">
        <Slider {...settings}>{children}</Slider>
      </div>
    </div>
  );
};

export default SlickSlider;
