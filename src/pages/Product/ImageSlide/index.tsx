import React, { useRef, useState } from "react";
import { IImage, IProduct } from "../../../types/product";
import MainSlider from "./MainSlider";
import NavSlider from "./NavSlider";
import Demand from "../../../components/Product/Demand";

type ImageSlide = {
  images: IImage[] | undefined;
};
const ImageSlide = ({ images }: ImageSlide) => {
  const [navSmall, setNavSmall] = useState(null);
  const [navMain, setNavMain] = useState(null);
  const navRefSmall = useRef(null);
  const navRefMain = useRef(null);

  React.useEffect(() => {
    setNavSmall(navRefSmall.current);
    setNavMain(navRefMain.current);
  }, []);
  return (
    <div className="product-info__block">
      {images ? (
        <div>
          <div className="product-info__slider">
            <MainSlider nav={navSmall} navRef={navRefMain} images={images} />
          </div>
          <div className="product-info__slider">
            <NavSlider nav={navMain} navRef={navRefSmall} images={images} />
          </div>
          <Demand />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ImageSlide;
