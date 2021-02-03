import React from "react";
import Slider from "react-slick";

interface ISlickSlider {
  children: JSX.Element[] | any;
  settings: any;
}
const SlickSlider = ({ children, settings }: ISlickSlider) => {
  return (
    <div>
      <div className="main-category__wrapper">
        <Slider {...settings}>{children}</Slider>
      </div>
    </div>
  );
};

export default SlickSlider;
