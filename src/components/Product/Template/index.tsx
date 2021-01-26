import React from "react";

const ProductTemplate = () => {
    return (
        <div className="template__wrapper">
            <div className="template-image__wrapper">
                <img className="template-image" src="https://pngicon.ru/file/uploads/stul-1.png" alt=""/>
            </div>
            <div className="template-info__wrapper">
                <div className="template-info__inner">
                    <div className="template-info__category--wrapper">
                        <a className="template-info__category" href="#">Для дома</a>
                    </div>
                    <h3 className="template-info__name">
                        <a className="template-info__link" href="#">Прочный стул</a>
                    </h3>
                    <div className="template-materials__wrapper">
                        <div className="template-material__wrapper">
                            <div className="template-material">
                                Дерево
                            </div>
                        </div>
                        <div className="template-material__wrapper">
                            <div className="template-material">
                                Дерево
                            </div>
                        </div>
                        <div className="template-material__wrapper">
                            <div className="template-material">
                                Дерево
                            </div>
                        </div>
                    </div>
                    <div className="template-price__wrapper">
                        <span className="sr-only">Обычная цена</span>
                        <span className="template-price template-price--regular">&#8381;1600</span>
                        <span className="sr-only">Цена</span>
                        <span className="template-price template-price--sale">&#8381;1200</span>
                        <span className="template-price__discount">-25%</span>
                    </div>
                </div>
            </div>
            <div className="template-demand">
                <span>New</span>
            </div>
        </div>
    )
}

export default ProductTemplate;