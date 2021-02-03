import React from "react";
import {IImage} from "../../../../types/product";

type SmallImage = {
    image: IImage;
};
const SmallImage = ({ image }: SmallImage) => {
    return (
        <div className="product-info__small-image--wrapper">
            <img className="product-info__small-image" src={`/${image.link}`} alt={image.alt}/>
        </div>
    )
}

export default SmallImage;