import React from "react";
import Name from "./Name";
import Category from "./Category";
import Materials from "./Materials";
import Price from "./Price";
import Description from "./Description";
import Button from "./Button";

const Info = () => {
  return (
    <div className="product-info__block">
      <Name name="Прочный стул" />
      <Category name="Для дома" />
      <Materials materials={["Дерево", "Дерево", "Дерево"]} />
      <Price />
      <Description
        description={
          "Архитектор В. П. Стасов (1769—1848) в конце 1810-х изобрёл новую конструкцию стула и кресла с выразительным профилем — так называемую «боковую раму». При такой конструкции передняя и задняя ножки и стойки спинки образуют единую боковую раму, две такие рамы соединялись между собой двумя поперечными брусками, а стойки спинки — поперечной плоскостью; боковины облицовывались шпоном так, что создавалось впечатление цельного куска дерева. Для таких стульев использовалось вкладное сиденье в форме трапеции."
        }
      />
      <Button />
    </div>
  );
};

export default Info;
