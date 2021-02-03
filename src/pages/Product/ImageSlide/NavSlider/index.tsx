import React from "react";
import { SlickSlider } from "../../../../components";
import SmallImage from "../SmallImage";
import { IImage } from "../../../../types/product";
import SlickNavSlider from "../../../../components/SlickNavSlider";
import MainSlider from "../MainSlider";

type NavSlider = {
  images: IImage[];
  nav: any;
  navRef: any;
};
const NavSlider = ({ images, nav, navRef }: NavSlider) => {
  const settingsSmall = {
    dots: false,
    infinite: false,
    focusOnSelect: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <SlickNavSlider navRef={navRef} nav={nav} settings={settingsSmall}>
      {images.map((img) => (
        <SmallImage image={img} />
      ))}
    </SlickNavSlider>
  );
};

export default NavSlider;
