import React from "react";
import Info from "../Info";
import Image from "../Image";
import Demand from "../Demand";
import Like from "../Like";
import {Link} from "react-router-dom";
import {IProduct} from "../../../types/product";

type ProductTemplate = {
    product: IProduct;
};
const ProductTemplate = ({ product }: ProductTemplate) => {
  return (
    <div className={`template__wrapper ${product.isHot? "template__wrapper--hot" : ""}`}>
        <Link to={`/product/${product.id}`}>
            <Image image={product.images[0]} popular={product.isHot}/>
            <Info product={product}/>
            <Demand />
            <Like />
        </Link>
    </div>
  );
};

export default ProductTemplate;
