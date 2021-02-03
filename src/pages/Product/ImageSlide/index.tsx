import React, { useRef, useState } from "react";
import { IImage } from "../../../types/product";
import MainSlider from "./MainSlider";
import NavSlider from "./NavSlider";
import Demand from "../../../components/Product/Demand";

const ImageSlide = () => {
  const [navSmall, setNavSmall] = useState(null);
  const [navMain, setNavMain] = useState(null);
  const navRefSmall = useRef(null);
  const navRefMain = useRef(null);

  const images: IImage[] = [
    {
      link: require("../../../public/images/content/products/chair1/IMG_7859.png")
        .default,
      alt: "123",
    },
    {
      link: require("../../../public/images/content/products/chair1/IMG_7860.png")
        .default,
      alt: "123",
    },
    {
      link: require("../../../public/images/content/products/chair1/IMG_7861.png")
        .default,
      alt: "123",
    },
    {
      link: require("../../../public/images/content/products/chair1/IMG_7862.png")
        .default,
      alt: "123",
    },
  ];

  React.useEffect(() => {
    setNavSmall(navRefSmall.current);
    setNavMain(navRefMain.current);
  }, []);
  return (
    <div className="product-info__block">
      <div className="product-info__slider">
        <MainSlider nav={navSmall} navRef={navRefMain} images={images} />
      </div>
      <div className="product-info__slider">
        <NavSlider nav={navMain} navRef={navRefSmall} images={images} />
      </div>
      <Demand />
    </div>
  );
};

export default ImageSlide;
