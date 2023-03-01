import { airPods, iPhones, Product } from "./products";

export interface Category {
    id: number;
    name: string;
    products: Product[];
}

export const categories: Category[] = [
    {
        id: 1,
        name: "iPhone",
        products: iPhones,
    },
    {
        id: 2,
        name: "AirPods",
        products: airPods,
    }
]