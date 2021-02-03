import React from "react";
import { LeftArrow, SlickSlider } from "../../../components";
import RightArrow from "../../../components/RightArrow";
import { ProductTemplate } from "../../../components/Product";
import {IProduct} from "../../../types/product";

type HotProducts = {
  products: IProduct[];
}
const HotProducts = ({products}: HotProducts) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  };
  return (
    <div className="main-products-hot__wrapper">
      <h3 className="main-products__title">Популярное</h3>
      <SlickSlider settings={settings}>
        {products.map((product) => (
            <ProductTemplate product={product} />
        ))}
      </SlickSlider>
    </div>
  );
};

export default HotProducts;
