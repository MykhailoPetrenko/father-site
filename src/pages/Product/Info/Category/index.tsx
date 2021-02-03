import React from "react";

type Category = {
    name: string;
}
const Category = ({name}: Category) => {
    return (
        <div className="template-info__category--wrapper">
            <a className="template-info__category product__category" href="#">
                {name}
            </a>
        </div>
    )
}

export default Category;