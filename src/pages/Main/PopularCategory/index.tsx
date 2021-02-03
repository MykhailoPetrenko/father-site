import React from "react";
import { Category, LeftArrow, SlickSlider } from "../../../components";
import RightArrow from "../../../components/RightArrow";
import { ICategory } from "../../../types/product";

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
  const categories: ICategory[] = [
    {
      imageLink: require("../../../public/images/content/products/chairs/chair1/IMG_7862.png")
          .default,
      name: "Стулья",
      quantity: " 12",
    },
    {
      imageLink: require("../../../public/images/content/products/bowls/IMG_7830.png")
        .default,
      name: "Чаши",
      quantity: "7",
    },
    {
      imageLink: require("../../../public/images/content/products/basket/IMG_7838.png")
          .default,
      name: "Корзины",
      quantity: "5",
    },
    {
      imageLink: require("../../../public/images/content/products/plates/IMG_7843.png")
          .default,
      name: "Тарелки",
      quantity: " 3",
    },
    {
      imageLink: require("../../../public/images/content/products/armchairs/armchair1/IMG_7884.png")
          .default,
      name: "Кресла",
      quantity: "7",
    },
    {
      imageLink:  require("../../../public/images/content/products/lamps/lamp1/IMG_7880.png")
          .default,
      name: "Лампы",
      quantity: "2",
    },
    {
      imageLink: "https://pngicon.ru/file/uploads/stul-1.png",
      name: "Стулья",
      quantity: " 12",
    },
    {
      imageLink: "https://pngicon.ru/file/uploads/stul-1.png",
      name: "Стулья",
      quantity: " 12",
    },
  ];


    // @ts-ignore
    return (
    <div className="main-category">
      <div className="main-category__header">
        <h3>Популярные категории</h3>
      </div>
      <div className="main-category__wrapper">
        <SlickSlider settings={settings}>
          {categories.map((item, ind) =>
            ind % 2 === 0 ? (
              <div className="main-category-items__block">
                <Category category={categories[ind]} />
                <Category category={categories[ind + 1]} />
              </div>
            ) : ""
          )}
        </SlickSlider>
      </div>
    </div>
  );
};

export default PopularCategory;
