import React, { useRef, useState } from "react";
import { BreadCrumbs } from "../../components";
import { IBreadCrumb } from "../../types/interfaces";
import { IImage } from "../../types/product";
import MainSlider from "./ImageSlide/MainSlider";
import NavSlider from "./ImageSlide/NavSlider";
import Demand from "../../components/Product/Demand";
import ImageSlide from "./ImageSlide";
import Info from "./Info";

const Product = () => {
  const breadCrumbs: IBreadCrumb[] = [
    { name: "Главная", link: "/" },
    { name: "Стулья", link: "/chairs" },
    { name: "Деревянный стул", link: "#" },
  ];


  return (
    <section>
      <div className="product">
        <div className="container">
          <BreadCrumbs breadCrumbs={breadCrumbs} />
          <div className="container container--wrapper">
            <div className="product-info--wrapper ">
              <ImageSlide />
              <Info />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
