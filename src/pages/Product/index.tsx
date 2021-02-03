import React, { useState } from "react";
import { BreadCrumbs } from "../../components";
import { IBreadCrumb } from "../../types/interfaces";
import { IImage, IProduct } from "../../types/product";
import ImageSlide from "./ImageSlide";
import Info from "./Info";

type Product = {
  match: any;
};
const Product = ({ match }: Product) => {
  const breadCrumbs: IBreadCrumb[] = [
    { name: "Главная", link: "/" },
    { name: "Стулья", link: "/chairs" },
    { name: "Деревянный стул", link: "#" },
  ];
  const [product, setProduct] = useState<IProduct | null>(null);
  const products: IProduct[] = [
    {
      id: "1",
      productName: "Прочный стул",
      category: {
        imageLink: require("../../public/images/content/products/chairs/chair1/IMG_7862.png")
          .default,
        name: "Стулья",
        quantity: " 12",
      },
      images: [
        {
          link: require("./../../public/images/content/products/chairs/chair1/IMG_7859.png")
            .default,
          alt: "123",
        },
        {
          link: require("./../../public/images/content/products/chairs/chair1/IMG_7860.png")
            .default,
          alt: "123",
        },
        {
          link: require("../../public/images/content/products/chairs/chair1/IMG_7861.png")
            .default,
          alt: "123",
        },
        {
          link: require("../../public/images/content/products/chairs/chair1/IMG_7862.png")
            .default,
          alt: "123",
        },
      ],
      materials: ["Дерево", "Дерево", "Дерево"],
      price: { quantity: 2500, discount: 0.25 },
      description:
        "Архитектор В. П. Стасов (1769—1848) в конце 1810-х изобрёл новую конструкцию стула и кресла с выразительным профилем — так называемую «боковую раму». При такой конструкции передняя и задняя ножки и стойки спинки образуют единую боковую раму, две такие рамы соединялись между собой двумя поперечными брусками, а стойки спинки — поперечной плоскостью; боковины облицовывались шпоном так, что создавалось впечатление цельного куска дерева. Для таких стульев использовалось вкладное сиденье в форме трапеции.",
      usage: "Для дома",
      popular: true,
      isHot: true,
    },
    {
      id: "2",
      productName: "Чаша золотая",
      category: {
        imageLink: require("../../public/images/content/products/bowls/IMG_7830.png")
          .default,
        name: "Чаши",
        quantity: "7",
      },
      images: [
        {
          link: require("../../public/images/content/products/bowls/IMG_7830.png")
            .default,
          alt: "123",
        },
        {
          link: require("../../public/images/content/products/bowls/IMG_7829.png")
            .default,
          alt: "123",
        },
        {
          link: require("../../public/images/content/products/bowls/IMG_7831.png")
            .default,
          alt: "123",
        },
        {
          link: require("../../public/images/content/products/bowls/IMG_7832.png")
            .default,
          alt: "123",
        },
      ],
      materials: ["Дерево", "Дерево", "Дерево"],
      price: { quantity: 2500, discount: 0.25 },
      description:
        "Архитектор В. П. Стасов (1769—1848) в конце 1810-х изобрёл новую конструкцию стула и кресла с выразительным профилем — так называемую «боковую раму». При такой конструкции передняя и задняя ножки и стойки спинки образуют единую боковую раму, две такие рамы соединялись между собой двумя поперечными брусками, а стойки спинки — поперечной плоскостью; боковины облицовывались шпоном так, что создавалось впечатление цельного куска дерева. Для таких стульев использовалось вкладное сиденье в форме трапеции.",
      usage: "Для дома",
      popular: true,
      isHot: true,
    },
    {
      id: "3",
      productName: "Супер корзина",
      category: {
        imageLink: require("./../../public/images/content/products/basket/IMG_7838.png")
          .default,
        name: "Корзины",
        quantity: "5",
      },
      images: [
        {
          link: require("../../public/images/content/products/basket/IMG_7838.png")
            .default,
          alt: "123",
        },
        {
          link: require("../../public/images/content/products/basket/IMG_7835.png")
            .default,
          alt: "123",
        },
        {
          link: require("../../public/images/content/products/basket/IMG_7837.png")
            .default,
          alt: "123",
        },
        {
          link: require("../../public/images/content/products/basket/IMG_7839.png")
            .default,
          alt: "123",
        },
      ],
      materials: ["Дерево", "Дерево", "Дерево"],
      price: { quantity: 2500, discount: 0.25 },
      description:
        "Архитектор В. П. Стасов (1769—1848) в конце 1810-х изобрёл новую конструкцию стула и кресла с выразительным профилем — так называемую «боковую раму». При такой конструкции передняя и задняя ножки и стойки спинки образуют единую боковую раму, две такие рамы соединялись между собой двумя поперечными брусками, а стойки спинки — поперечной плоскостью; боковины облицовывались шпоном так, что создавалось впечатление цельного куска дерева. Для таких стульев использовалось вкладное сиденье в форме трапеции.",
      usage: "Для дома",
      popular: true,
      isHot: false,
    },
    {
      id: "4",
      productName: "Тарелка",
      category: {
        imageLink: require("../../public/images/content/products/plates/IMG_7843.png")
          .default,
        name: "Тарелки",
        quantity: " 3",
      },
      images: [
        {
          link: require("../../public/images/content/products/plates/IMG_7843.png")
            .default,
          alt: "123",
        },
        {
          link: require("../../public/images/content/products/plates/IMG_7847.png")
            .default,
          alt: "123",
        },
        {
          link: require("../../public/images/content/products/plates/IMG_7849.png")
            .default,
          alt: "123",
        },
        {
          link: require("../../public/images/content/products/plates/IMG_7850.png")
            .default,
          alt: "123",
        },
      ],
      materials: ["Дерево", "Дерево", "Дерево"],
      price: { quantity: 2500, discount: null },
      description:
        "Архитектор В. П. Стасов (1769—1848) в конце 1810-х изобрёл новую конструкцию стула и кресла с выразительным профилем — так называемую «боковую раму». При такой конструкции передняя и задняя ножки и стойки спинки образуют единую боковую раму, две такие рамы соединялись между собой двумя поперечными брусками, а стойки спинки — поперечной плоскостью; боковины облицовывались шпоном так, что создавалось впечатление цельного куска дерева. Для таких стульев использовалось вкладное сиденье в форме трапеции.",
      usage: "Для дома",
      popular: true,
      isHot: false,
    },
    {
      id: "5",
      productName: "Кресло царское",
      category: {
        imageLink: require("../../public/images/content/products/armchairs/armchair1/IMG_7884.png")
          .default,
        name: "Кресла",
        quantity: "7",
      },
      images: [
        {
          link: require("../../public/images/content/products/armchairs/armchair1/IMG_7884.png")
            .default,
          alt: "123",
        },
        {
          link: require("../../public/images/content/products/armchairs/armchair1/IMG_7883.png")
            .default,
          alt: "123",
        },
        {
          link: require("../../public/images/content/products/armchairs/armchair1/IMG_7885.png")
            .default,
          alt: "123",
        },
        {
          link: require("../../public/images/content/products/armchairs/armchair1/IMG_7886.png")
            .default,
          alt: "123",
        },
      ],
      materials: ["Дерево", "Дерево", "Дерево"],
      price: { quantity: 2500, discount: 0.25 },
      description:
        "Архитектор В. П. Стасов (1769—1848) в конце 1810-х изобрёл новую конструкцию стула и кресла с выразительным профилем — так называемую «боковую раму». При такой конструкции передняя и задняя ножки и стойки спинки образуют единую боковую раму, две такие рамы соединялись между собой двумя поперечными брусками, а стойки спинки — поперечной плоскостью; боковины облицовывались шпоном так, что создавалось впечатление цельного куска дерева. Для таких стульев использовалось вкладное сиденье в форме трапеции.",
      usage: "Для дома",
      popular: true,
      isHot: false,
    },
    {
      id: "6",
      productName: "Лампа Луна",
      category: {
        imageLink: require("../../public/images/content/products/lamps/lamp1/IMG_7880.png")
          .default,
        name: "Лампы",
        quantity: "2",
      },
      images: [
        {
          link: require("../../public/images/content/products/lamps/lamp1/IMG_7880.png")
            .default,
          alt: "123",
        },
        {
          link: require("../../public/images/content/products/lamps/lamp1/IMG_7881.png")
            .default,
          alt: "123",
        },
        {
          link: require("../../public/images/content/products/lamps/lamp1/IMG_7882.png")
            .default,
          alt: "123",
        },
        {
          link: require("../../public/images/content/products/lamps/lamp1/IMG_7880.png")
            .default,
          alt: "123",
        },
      ],
      materials: ["Дерево", "Дерево", "Дерево"],
      price: { quantity: 2500, discount: null },
      description:
        "Архитектор В. П. Стасов (1769—1848) в конце 1810-х изобрёл новую конструкцию стула и кресла с выразительным профилем — так называемую «боковую раму». При такой конструкции передняя и задняя ножки и стойки спинки образуют единую боковую раму, две такие рамы соединялись между собой двумя поперечными брусками, а стойки спинки — поперечной плоскостью; боковины облицовывались шпоном так, что создавалось впечатление цельного куска дерева. Для таких стульев использовалось вкладное сиденье в форме трапеции.",
      usage: "Для дома",
      popular: true,
      isHot: false
    },
  ];

  React.useEffect(() => {
    console.log((products.find((item) => item.id === match.params.templateId)))
    setProduct(products.find((item) => item.id === match.params.productId)!);
    console.log(product)
  }, [match.params.templateId]);
  return (
    <section>
      <div className="product">
        <div className="container">
          <BreadCrumbs breadCrumbs={breadCrumbs} />
          <div className="container container--wrapper">
            <div className="product-info--wrapper ">
              {product ? ( <ImageSlide images={product.images} />) : ""}
              <Info />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
