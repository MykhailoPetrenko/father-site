import React from "react";
import Intro from "./Intro";
import PopularCategory from "./PopularCategory";
import PopularProducts from "./PopularProducts";

const Main = () => {
  return (
      <section>
          <Intro />
          <div className="container">
              <PopularCategory />
              <PopularProducts />
          </div>
      </section>

  );
};

export default Main;
