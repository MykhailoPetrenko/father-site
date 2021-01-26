import React from "react";
import { PlayIcon } from "../index";

const Category = () => {
  return (
    <div className="main-category__item--wrapper">
      <div className="main-category__item">
        <div>
          <div className="main-category-item__wrapper">
            <div className="main-category-item__name">Стулья</div>
            <div className="main-category-item-quantity__wrapper">
              <div className="main-category-item-quantity__number">12</div>
              <div className="main-category-item-quantity__name">штук</div>
            </div>
            <div className="main-category-item__button--wrapper">
              <div className="main-category-item__button"> Больше Товаров</div>
              <PlayIcon />
            </div>
          </div>
        </div>
        <div className="main-category-item__image--wrapper">
          <img
            className="main-category-item__image"
            src="https://pngicon.ru/file/uploads/stul-1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
