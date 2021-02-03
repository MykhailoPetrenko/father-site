import React from "react";
import {IBreadCrumb} from "../../../types/interfaces";
import {RightArrow} from "../../Icons";

type BreadCrumb = {
    breadCrumb: IBreadCrumb;
}
const BreadCrumb = ({breadCrumb}: BreadCrumb) => {
    return (
        <div className="breadcrumbs__link-wrapper">
            <a className="breadcrumbs__link" href={breadCrumb.link}>{breadCrumb.name}</a>
            <RightArrow />
        </div>
    )
}

export default BreadCrumb;