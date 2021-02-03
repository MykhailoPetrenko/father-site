import React from "react";
import { SearchIcon } from "../../index";
import {IImage} from "../../../types/product";

type Image = {
  image: IImage;
  popular: boolean;
};
const Image = ({ image, popular }: Image) => {
  return (
    <div className={`template-image__wrapper ${!popular ? "template-image__wrapper--normal" : ""}`}>
      <img
        className={`template-image ${popular ? "template-image--hot" : ""}`}
        src={image.link}
        alt={image.alt}
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
