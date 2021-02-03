import React from "react";

type Material = {
  name: string;
};
const Material = ({ name }: Material) => {
  return <div className="template-material">{name}</div>;
};

export default Material;
