import React from "react";
// @ts-ignore
import tree from "../../public/images/svg/tree.png";
import {LikeIcon, Sandwich, SearchIcon} from "../index";
import { Link } from "react-router-dom";
import Search from "./Search";
import {Basket} from "../Icons";

const NavBar = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__top">
          <div className="header__top-content">
            <nav className="header-nav">
              <ul className="header-nav__list">
                <li className="header-nav__item"><Link to="/">
                  <div className="header-nav__logo--wrapper">
                    <img
                        className="header-nav-icon__logo"
                        src={tree}
                        alt="Logo"
                    />
                    <div>
                      <div className="header-nav-logo__main">Название</div>
                      <div className="header-nav-logo__slogan">
                        Слоган наше все
                      </div>
                    </div>
                  </div>
                </Link></li>
                <li className="header-nav__item">Товары</li>
                <li className="header-nav__item">Доставка</li>
                <li className="header-nav__item">Контакты</li>
              </ul>
            </nav>
            <nav className="header-nav">
              <ul className="header-nav__list">
                <li className="header-nav__item header-nav__item--search">
                  <Search />
                </li>
                <li className="header-nav__item">
                  <LikeIcon width={"25px"} height={"25px"} />
                </li>
                <li className="header-nav__item">
                  <Basket/>
                </li>
              </ul>
            </nav>
            <Sandwich />
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
