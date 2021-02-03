import React from "react";
import { Category, LeftArrow, SlickSlider } from "../../../components";
import RightArrow from "../../../components/RightArrow";

const PopularCategory = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <RightArrow />,
        prevArrow: <LeftArrow />,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                },
            },
            {
                breakpoint: 670,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                },
            },
        ],
    };

    return (
    <div className="main-category">
      <div className="main-category__header">
        <h3>Популярные категории</h3>
      </div>
      <div className="main-category__wrapper">
        <SlickSlider settings={settings}>
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
