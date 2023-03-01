export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  url: string;
  img: string;
  rating: number;
}

export const iPhones: Product[] = [
  {
    id: 1,
    name: 'iPhone 14 Pro Max',
    price: 780000,
    description: 'технология NFC: Да цвет: фиолетовый тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы диагональ: 6.7 дюйм размер оперативной памяти: 6 ГБ процессор: 6-ядерный Apple A16 Bionic объем встроенной памяти: 256 ГБ емкость аккумулятора: 3095 мАч',
    url: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000',
    img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg",
    rating: 0
  },
  {
    id: 2,
    name: 'iPhone 13 Pro Max',
    price: 443950,
    description: 'Топ за свои деньги',
    url: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
    img: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hc2/h05/46392662458398/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg",
    rating: 0
  },
  {
    id: 3,
    name: 'iPhone 12 Pro Max',
    price: 122900,
    description: 'поддержка HD: 4K UHDоперационная система: tvOSинтерфейсы: Wi-Fi, ,Bluetooth, ,Ethernetвстроенная память: 131072 Мб',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h22/h82/33279111200798/apple-iphone-12-64gb-cernyj-100656839-1-Container.jpg',
    url:'https://kaspi.kz/shop/p/apple-iphone-12-64gb-chernyi-100656839/?c=750000000',
    rating: 0
  },
  {
    id: 4,
    name: 'iPhone 11 Pro Max',
    price: 119535,
    description: 'тип: наушникивид: внутриканальныеподключение: беспроводноетип акустического оформления: закрытыетип крепления: без креплениясистема активного шумоподавления: Дамикрофон: Да',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h8b/h66/31489166606366/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg',
    url:'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000',
    rating: 0
  },
  {
    id: 5,
    name: 'iPhone 10 Pro Max',
    price: 480450,
    description: 'диагональ экрана: 13.3 дюймпроцессор: Apple M1видеокарта: Apple M1 7 coreразмер оперативной памяти: 8 ГБтип жесткого диска: SSDобщий объем накопителей: 256 ГБ',
    img: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h5f/h36/31503572828190/apple-iphone-xr-64gb-slim-box-belyj-100692571-1-Container.jpg',
    url:'https://kaspi.kz/shop/p/apple-iphone-xr-64gb-slim-box-belyi-100692571/?c=750000000',
    rating: 0
  },
];

export const airPods: Product[] = [
  {
    id: 1,
    name: 'Airpods 2',
    price: 780000,
    description: 'технология NFC: Да цвет: фиолетовый тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы диагональ: 6.7 дюйм размер оперативной памяти: 6 ГБ процессор: 6-ядерный Apple A16 Bionic объем встроенной памяти: 256 ГБ емкость аккумулятора: 3095 мАч',
    url: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=710000000#!/item',
    img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg",
    rating: 0
  },
  {
    id: 2,
    name: 'Airpods 3',
    price: 443950,
    description: 'Топ за свои деньги',
    url: 'https://kaspi.kz/shop/p/xiaomi-12-pro-nfc-12-gb-256-gb-seryi-104688742/?c=710000000#!/item',
    img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h37/h95/52369623580702/xiaomi-12-pro-12-gb-256-gb-seryj-104688742-1.jpg",
    rating: 0
  },
  {
    id: 3,
    name: 'Airpods Pro',
    price: 122900,
    description: 'поддержка HD: 4K UHDоперационная система: tvOSинтерфейсы: Wi-Fi, ,Bluetooth, ,Ethernetвстроенная память: 131072 Мб',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf8/hd3/66933839134750/apple-tv-128gb-4k-2022-wi-fi-ethernet-108062591-1.jpg',
    url:'https://kaspi.kz/shop/p/apple-tv-128gb-4k-2022-wi-fi-ethernet-108062591/?c=710000000#!/item',
    rating: 0
  },
  {
    id: 4,
    name: 'Airpods Pro 2',
    price: 119535,
    description: 'тип: наушникивид: внутриканальныеподключение: беспроводноетип акустического оформления: закрытыетип крепления: без креплениясистема активного шумоподавления: Дамикрофон: Да',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hba/hf8/62281477259294/apple-airpods-pro-2nd-generation-belyj-106362968-1.jpg',
    url:'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-106362968/?c=710000000#!/item',
    rating: 0
  },
  {
    id: 5,
    name: 'Airpods Pro Max',
    price: 480450,
    description: 'диагональ экрана: 13.3 дюймпроцессор: Apple M1видеокарта: Apple M1 7 coreразмер оперативной памяти: 8 ГБтип жесткого диска: SSDобщий объем накопителей: 256 ГБ',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
    url:'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=710000000#!/item',
    rating: 0
  },
];