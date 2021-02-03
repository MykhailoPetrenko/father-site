export interface IImage {
    link: string;
    alt: string;
}
export interface ICategory {
    name: string;
    imageLink: string;
    quantity: string;
}
export interface IPrice{
    quantity: number;
    discount: number | null;
}
export interface IProduct {
    id: string;
    productName: string;
    category: ICategory;
    images: IImage[];
    materials: string[];
    price: IPrice;
    description: string;
    usage: string;
    popular: boolean;
    isHot: boolean;
}