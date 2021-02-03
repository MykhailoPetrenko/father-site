import React from "react";

const Price = () => {
    return (
        <div className="template-price__wrapper product-price">
            <span className="sr-only">Обычная цена</span>
            <span className="template-price template-price--regular">
          &#8381;1600
        </span>
            <span className="sr-only">Цена</span>
            <span className="template-price template-price--sale">&#8381;1200</span>
            <span className="template-price__discount">-25%</span>
        </div>
    )
}

export default Price;