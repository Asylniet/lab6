import { airPods, iPhones, macbooks, Product } from "./products";

export interface Category {
    id: number;
    name: string;
    products: Product[];
    image: string;
}

export const categories: Category[] = [
    {
        id: 1,
        name: "iPhone",
        products: iPhones,
        image: 'https://www.apple.com/kz/iphone/home/images/meta/iphone__ky2k6x5u6vue_og.png'
    },
    {
        id: 2,
        name: "AirPods",
        products: airPods,
        image: 'https://www.apple.com/v/airpods-2nd-generation/e/images/meta/og__bz8g5g9sbyoi_overview.png'
    },
    {
        id: 3,
        name: "Macbooks",
        products: macbooks,
        image: 'https://www.apple.com/newsroom/images/product/mac/standard/Apple-MacBook-Pro-M2-Pro-and-M2-Max-hero-230117.jpg.landing-big_2x.jpg'
    }
]