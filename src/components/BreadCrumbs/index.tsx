import React from "react";
import { IBreadCrumb } from "../../types/interfaces";
import BreadCrumb from "./BreadCrumb";

type BreadCrumbs = {
  breadCrumbs: IBreadCrumb[];
};
const BreadCrumbs = ({ breadCrumbs }: BreadCrumbs) => {
  return (
    <div className="breadcrumbs__wrapper">
      <ul className="breadcrumbs">
        {breadCrumbs.map((breadCrumb, index) => (
          <li className="breadcrumbs__item">
            {index !== breadCrumbs.length - 1 ? (
              <BreadCrumb breadCrumb={breadCrumb} />
            ) : (
              <span className="breadcrumbs__text">{breadCrumb.name}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BreadCrumbs;
