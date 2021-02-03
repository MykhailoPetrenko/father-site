import React from "react";
import Material from "../../../../components/Product/Info/Material";

type Materials = {
  materials: string[];
};
const Materials = ({ materials }: Materials) => {
  return (
    <div className="template-materials__wrapper product-material--wrapper">
      {materials.map((material) => (
        <div className="template-material__wrapper product-material">
          <Material name="Дерево" />
        </div>
      ))}
    </div>
  );
};

export default Materials;
