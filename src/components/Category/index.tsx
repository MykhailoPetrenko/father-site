import React from "react";
import { PlayIcon } from "../index";
import {ICategory} from "../../types/product";


type Category = {
  category: ICategory;
};
const Category = ({ category }: Category) => {
  return (
    <div className="main-category__item--wrapper">
      <div className="main-category__item">
        <div>
          <div className="main-category-item__wrapper">
            <div className="main-category-item__name">{category.name}</div>
            <div className="main-category-item-quantity__wrapper">
              <div className="main-category-item-quantity__number">
                {category.quantity}
              </div>
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
            src={category.imageLink}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
