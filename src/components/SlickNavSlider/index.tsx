import React from "react";
import Slider from "react-slick";

type SlickNavSlider = {
  children: JSX.Element[];
  settings: any;
  nav: any;
  navRef: any;
};
const SlickNavSlider = ({
  children,
  settings,
  nav,
  navRef,
}: SlickNavSlider) => {
  return (
    <div>
      <div className="main-category__wrapper">
        <Slider ref={navRef} asNavFor={nav} {...settings}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default SlickNavSlider;
