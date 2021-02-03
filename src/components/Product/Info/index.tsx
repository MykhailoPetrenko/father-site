import React from "react";
import Material from "./Material";

type Info = {
  isHot: boolean;
};
const Info = ({ isHot }: Info) => {
  return (
    <div className="template-info__wrapper">
      <div
        className={`template-info__inner ${
          isHot ? "template-info__inner--hot" : ""
        }`}
      >
        <div className="template-info__category--wrapper">
          <a className="template-info__category" href="#">
            Для дома
          </a>
        </div>
        <h3 className="template-info__name">
          <a className="template-info__link product-name" href="#">
            Прочный стул
          </a>
        </h3>
        <div
          className={`template-materials__wrapper ${
            isHot ? "template-materials__wrapper--hot" : ""
          }`}
        >
          <div className="template-material__wrapper template-material__small">
            <Material name="Дерево" />
          </div>
          <div className="template-material__wrapper template-material__small">
            <Material name="Дерево" />
          </div>
          <div className="template-material__wrapper template-material__small">
            <Material name="Дерево" />
          </div>
        </div>
        <div
          className={`template-price__wrapper ${
            isHot ? "template-price__wrapper--hot" : ""
          }`}
        >
          <span className="sr-only">Обычная цена</span>
          <span className="template-price template-price--regular">
            &#8381;1600
          </span>
          <span className="sr-only">Цена</span>
          <span className="template-price template-price--sale">
            &#8381;1200
          </span>
          <span className="template-price__discount">-25%</span>
        </div>
      </div>
    </div>
  );
};

export default Info;
