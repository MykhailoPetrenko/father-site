import React from "react";
import {LikeIcon} from "../../../../components";

const WishList = () => {
    return (
        <div className="product-actions__wishlist">
            <LikeIcon width={"15px"} height={"15px"}/>
            <div className="product-actions__text">Добавить в понравившееся</div>
        </div>
    )
}

export default WishList;