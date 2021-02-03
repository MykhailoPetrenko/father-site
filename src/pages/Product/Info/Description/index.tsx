import React from "react";

type Description = {
  description: string;
};
const Description = ({ description }: Description) => {
  return <div className="product__description">{description}</div>;
};

export default Description;
