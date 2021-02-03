import React from "react";
import {ProductTemplate} from "../../../components/Product";

const PopularProducts = () => {
  return (
    <div className="main-products">
      <h3 className="main-products__title">Лучшие предложения:</h3>
        <div className="main-products__wrapper">
          <ProductTemplate isHot={false} />
          <ProductTemplate isHot={false} />
      </div>
    </div>
  );
};

export default PopularProducts;
