import React from "react";
import { ProductTemplate } from "../../../components/Product";
import { IProduct } from "../../../types/product";

type PopularProducts = {
  products: IProduct[];
};
const PopularProducts = ({ products }: PopularProducts) => {
  return (
    <div className="main-products">
      <h3 className="main-products__title">Лучшие предложения:</h3>
      <div className="main-products__wrapper">
        {products.map((product) => (
          <ProductTemplate product={product} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
