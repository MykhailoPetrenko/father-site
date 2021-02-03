import React from "react";
import { SlickSlider } from "../../../../components";
import { IImage } from "../../../../types/product";
import Image from "../Image";
import SlickNavSlider from "../../../../components/SlickNavSlider";
const settingsBig = {
  dots: false,
  infinite: false,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

type MainSlider = {
  images: IImage[];
  nav: any;
  navRef: any;
};
const MainSlider = ({ images, navRef, nav }: MainSlider) => {
  return (
    <SlickNavSlider navRef={navRef} nav={nav} settings={settingsBig}>
      {images.map((img) => (
        <Image image={img} />
      ))}
    </SlickNavSlider>
  );
};

export default MainSlider;
