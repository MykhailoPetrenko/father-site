import React from "react";
import { IImage } from "../../../../types/product";

type Image = {
  image: IImage;
};
const Image = ({ image }: Image) => {
  return (
      <div className="product-info__image--wrapper">
          <img className="product-info__image" src={image.link} alt={image.alt}/>
      </div>
  );
};

export default Image;
