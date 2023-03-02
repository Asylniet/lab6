export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  url: string;
  img: string;
  rating: number;
  like: number;
}

export const iPhones: Product[] = [
  {
    id: 1,
    name: 'iPhone 14 Pro Max',
    price: 780000,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis laudantium est sint numquam libero veniam ullam accusamus perspiciatis ex.',
    url: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000',
    img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg",
    rating: 3,
    like: 10
  },
  {
    id: 2,
    name: 'iPhone 13 Pro Max',
    price: 443950,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis laudantium est sint numquam libero veniam ullam accusamus perspiciatis ex.',
    url: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
    img: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hc2/h05/46392662458398/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg",
    rating: 5,
    like: 120
  },
  {
    id: 3,
    name: 'iPhone 12 Pro Max',
    price: 122900,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis laudantium est sint numquam libero veniam ullam accusamus perspiciatis ex.',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h22/h82/33279111200798/apple-iphone-12-64gb-cernyj-100656839-1-Container.jpg',
    url:'https://kaspi.kz/shop/p/apple-iphone-12-64gb-chernyi-100656839/?c=750000000',
    rating: 1,
    like: 57
  },
  {
    id: 4,
    name: 'iPhone 11 Pro Max',
    price: 119535,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis laudantium est sint numquam libero veniam ullam accusamus perspiciatis ex.',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h8b/h66/31489166606366/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg',
    url:'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000',
    rating: 4,
    like: 34
  },
  {
    id: 5,
    name: 'iPhone 10 Pro Max',
    price: 480450,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis laudantium est sint numquam libero veniam ullam accusamus perspiciatis ex.',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h5f/h36/31503572828190/apple-iphone-xr-64gb-slim-box-belyj-100692571-1-Container.jpg',
    url:'https://kaspi.kz/shop/p/apple-iphone-xr-64gb-slim-box-belyi-100692571/?c=750000000',
    rating: 2,
    like: 117
  },
];

export const airPods: Product[] = [
  {
    id: 1,
    name: 'Airpods 2',
    price: 780000,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis laudantium est sint numquam libero veniam ullam accusamus perspiciatis ex.',
    url: 'https://kaspi.kz/shop/p/apple-airpods-with-charging-case-belyi-4804056/?c=750000000',
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MV7N2?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1551489688005",
    rating: 3,
    like: 70
  },
  {
    id: 2,
    name: 'Airpods 3',
    price: 443950,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis laudantium est sint numquam libero veniam ullam accusamus perspiciatis ex.',
    url: 'https://kaspi.kz/shop/p/apple-airpods-3-belyi-102667744/?c=750000000',
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1632861342000",
    rating: 1,
    like: 218
  },
  {
    id: 3,
    name: 'Airpods Pro',
    price: 122900,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis laudantium est sint numquam libero veniam ullam accusamus perspiciatis ex.',
    img: 'https://img.prisguiden.no/3053/3053949/airpods-pro.728x854!m.jpg',
    url:'https://kaspi.kz/shop/p/apple-airpods-pro-belyi-4804718/?c=750000000',
    rating: 4,
    like: 196
  },
  {
    id: 4,
    name: 'Airpods Pro 2',
    price: 119535,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis laudantium est sint numquam libero veniam ullam accusamus perspiciatis ex.',
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1660803972361',
    url:'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-106362968/?c=750000000',
    rating: 5,
    like: 783
  },
  {
    id: 5,
    name: 'Airpods Pro Max',
    price: 480450,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis laudantium est sint numquam libero veniam ullam accusamus perspiciatis ex.',
    img: 'https://www.icon.co.cr/wp-content/uploads/2021/03/PRUEBA-600x600.png',
    url:'https://kaspi.kz/shop/p/apple-airpods-max-serebristyi-100949286/?c=750000000',
    rating: 1,
    like: 17
  },
];

export const macbooks: Product[] = [
  {
    id: 1,
    name: 'Macbook Pro 16',
    price: 780000,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis laudantium est sint numquam libero veniam ullam accusamus perspiciatis ex.',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hcd/hfd/47209588097054/apple-macbook-pro-16-mk193-seryj-102892005-1.jpg',
    url:'https://kaspi.kz/shop/p/apple-macbook-pro-16-mk1e3-serebristyi-102892005/?c=750000000',
    rating: 3,
    like: 70
  },
  {
    id: 2,
    name: 'Macbook Pro 13',
    price: 443950,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis laudantium est sint numquam libero veniam ullam accusamus perspiciatis ex.',
    url: 'https://kaspi.kz/shop/p/apple-macbook-pro-13-myd82-seryi-100797630/?c=750000000',
    img: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h8a/hb7/33090949480478/apple-macbook-pro-13-myd82-seryi-100797630-1.jpg",
    rating: 1,
    like: 218
  },
  {
    id: 3,
    name: 'Macbook Pro 14',
    price: 122900,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis laudantium est sint numquam libero veniam ullam accusamus perspiciatis ex.',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hf8/h06/47153374068766/apple-macbook-pro-14-mkgp3-seryj-102866247-1.jpg',
    url:'https://kaspi.kz/shop/p/apple-macbook-pro-14-mkgp3-seryi-102866247/?c=750000000',
    rating: 4,
    like: 196
  },
  {
    id: 4,
    name: 'Macbook Air 13',
    price: 119535,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis laudantium est sint numquam libero veniam ullam accusamus perspiciatis ex.',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h67/h95/33125682380830/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
    url:'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000',
    rating: 5,
    like: 783
  },
  {
    id: 5,
    name: 'Macbook Pro 14',
    price: 480450,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis laudantium est sint numquam libero veniam ullam accusamus perspiciatis ex.',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hf8/h06/47153374068766/apple-macbook-pro-14-mkgp3-seryj-102866247-1.jpg',
    url:'https://kaspi.kz/shop/p/apple-macbook-pro-14-mkgp3-seryi-102866247/?c=750000000',
    rating: 1,
    like: 17
  },
];