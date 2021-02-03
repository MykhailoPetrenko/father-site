import React from "react";
import Info from "../Info";
import Image from "../Image";
import Demand from "../Demand";
import Like from "../Like";
import {Link} from "react-router-dom";

type ProductTemplate = {
  isHot: boolean;
};
const ProductTemplate = ({ isHot }: ProductTemplate) => {
  return (
    <div className={`template__wrapper ${isHot ? "template__wrapper--hot" : ""}`}>
        <Link to="/product">
            <Image isHot={isHot}/>
            <Info isHot={isHot}/>
            <Demand />
            <Like />
        </Link>
    </div>
  );
};

export default ProductTemplate;
