import React from "react";

type Name = {
  name: string;
};
const Name = ({ name }: Name) => {
  return (
    <h1 className="template-info__name">
      <div className="product-name">{name}</div>
    </h1>
  );
};

export default Name;
