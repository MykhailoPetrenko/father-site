import React from "react";
import { SearchIcon } from "../../index";

type Image = {
  isHot: boolean;
};
const Image = ({ isHot }: Image) => {
  return (
    <div className="template-image__wrapper">
      <img
        className={`template-image ${isHot ? "template-image--hot" : ""}`}
        src="https://pngicon.ru/file/uploads/stul-1.png"
        alt=""
      />
      <div className="template-image__search--wrapper">
        <div className="template-image__search">
          <SearchIcon width={"16px"} height={"16px"} />
        </div>
      </div>
    </div>
  );
};

export default Image;
