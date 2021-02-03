import React from "react";
import Intro from "./Intro";
import PopularCategory from "./PopularCategory";
import PopularProducts from "./PopularProducts";
import HotProducts from "./HotProducts";

const Main = () => {
  return (
      <section>
          <Intro />
          <div className="container">
              <PopularCategory />
              <div className="main-products--wrapper">
                  <HotProducts />
                  <PopularProducts />
              </div>
          </div>
      </section>

  );
};

export default Main;
