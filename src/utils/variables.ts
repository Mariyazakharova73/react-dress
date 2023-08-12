export const WHITE_COLOR = "#FFFFFF";
export const MAIN_COLOR = "#e9967a";
export const GREY_COLOR = "#cfcfcf";
export const BLACK_COLOR = "#000000";
export const LIGHT_GREY_COLOR = "#e5e1e1";

export const list = [
  { name: "популярности", sortProperty: "-rating" },
  { name: "цене (по убыванию)", sortProperty: "price" },
  { name: "цене (по возрастанию)", sortProperty: "-price" },
  { name: "алфавиту", sortProperty: "-title" },
];

export const categories = [
  "Все",
  "Короткие",
  "Сарафаны",
  "Платье-пиджак",
  "Платье-рубашка",
  "Вечерние",
];

export const colorArr = [
  { name: "Светлое", code: 0 },
  { name: "Темное", code: 1 },
];
export const sizesArr = [42, 44, 46, 48];

export const BASE_URL = "https://631cd2604fa7d3264cb78455.mockapi.io/items";

export const HOME_PATH = "/";
export const CART_PATH = "cart";
export const NOT_FOUND_PATH = "*";
