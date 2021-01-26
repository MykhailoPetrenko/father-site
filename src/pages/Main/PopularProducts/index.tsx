import React from "react";
import {ProductTemplate} from "../../../components/Product";

const PopularProducts = () => {
  return (
    <div className="main-products">
      <h2 className="main-products__title">Популярные товары:</h2>
      <div className="main-products__wrapper">
          <ProductTemplate />
          <ProductTemplate />
          <ProductTemplate />
          <ProductTemplate />
          <ProductTemplate />
          <ProductTemplate />
          <ProductTemplate />
      </div>
    </div>
  );
};

export default PopularProducts;
