import React from "react";

const Intro = () => {
    return (
        <div className="main-intro">
            <div className="main-intro__image"></div>
            <div className="main-intro__blind"></div>
            <div className="main-intro__item main-intro__text main-intro__text--big">
                Самые лучшие
            </div>
            <div className="main-intro__item main-intro__text main-intro__text--small">
               изделия из дерева
            </div>
            <div className="main-intro__item main-intro__button">
                <a href={"/product"} className="product-buy__button product-buy">
                    Наши Товары
                </a>
            </div>
        </div>

    )
}

export default Intro;