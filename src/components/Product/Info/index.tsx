import React from "react";
import Material from "./Material";
import { IProduct } from "../../../types/product";

type Info = {
  product: IProduct;
};
const Info = ({ product }: Info) => {
  return (
    <div className="template-info__wrapper">
      <div
        className={`template-info__inner ${
          product.isHot ? "template-info__inner--hot" : ""
        }`}
      >
        <div className="template-info__category--wrapper">
          <a className="template-info__category" href="#">
            {product.usage}
          </a>
        </div>
        <h3 className="template-info__name">
          <a className="template-info__link product-name" href="#">
            {product.productName}
          </a>
        </h3>
        <div
          className={`template-materials__wrapper ${
            product.isHot ? "template-materials__wrapper--hot" : ""
          }`}
        >
          {product.materials.map((material: string) => (
            <div className="template-material__wrapper template-material__small">
              <Material name={material} />
            </div>
          ))}
        </div>
        {product.price.discount ? (
          <div
            className={`template-price__wrapper ${
              product.isHot ? "template-price__wrapper--hot" : ""
            }`}
          >
            <span className="sr-only">Обычная цена</span>
            <span className="template-price template-price--regular">
              &#8381;{product.price.quantity}
            </span>
            <span className="sr-only">Цена</span>
            <span className="template-price template-price--sale">
              &#8381;{product.price.quantity * product.price.discount}
            </span>
            <span className="template-price__discount">
              -{product.price.discount * 100}%
            </span>
          </div>
        ) : (
          <div
            className={`template-price__wrapper ${
              product.isHot ? "template-price__wrapper--hot" : ""
            }`}
          >
            <span className="template-price">
              &#8381;{product.price.quantity}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Info;
