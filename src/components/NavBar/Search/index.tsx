import React from "react";
import { SearchIcon } from "../../index";

const Search = () => {
  return (
    <div className="header-search__wrapper">
      <div className="header-search">
        <input className="header-search__input" type="text" placeholder="Искать продукт..." />
        <div className="header-search__icon--wrapper">
            <SearchIcon width={"25px"} height={"25px"} />
        </div>
      </div>
    </div>
  );
};

export default Search;
//<SearchIcon width={"25px"} height={"25px"} />
