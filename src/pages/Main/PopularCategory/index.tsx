import React from "react";
import { Category, LeftArrow, SlickSlider } from "../../../components";
import RightArrow from "../../../components/RightArrow";

const PopularCategory = () => {
  return (
    <div className="main-category">
      <div className="main-category__header">
        <h2>Популярные категории:</h2>
      </div>
      <div className="main-category__wrapper">
        <SlickSlider>
            <div className="main-category-items__block">
              <Category />
              <Category />
            </div>

          <div className="main-category-items__block">
            <Category />
            <Category />
          </div>
          <div className="main-category-items__block">
            <Category />
            <Category />
          </div>
          <div className="main-category-items__block">
            <Category />
            <Category />
          </div>
        </SlickSlider>
      </div>
    </div>
  );
};

export default PopularCategory;
