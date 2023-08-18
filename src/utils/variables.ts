import { CollapseProps } from "antd";
import { ISort, SortPropertyEnum } from "../types/types";

export const WHITE_COLOR = "#FFFFFF";
export const MAIN_COLOR = "#e9967a";
export const GREY_COLOR = "#cfcfcf";
export const BLACK_COLOR = "#000000";
export const LIGHT_GREY_COLOR = "#e5e1e1";

export const list: ISort[] = [
  { name: "популярности", sortProperty: SortPropertyEnum.RATING_ASC },
  { name: "цене (по убыванию)", sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: "цене (по возрастанию)", sortProperty: SortPropertyEnum.PRICE_ASC },
  { name: "алфавиту", sortProperty: SortPropertyEnum.TITLE_ASC },
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
export const DRESS_PATH = "dress/:id";
export const NOT_FOUND_PATH = "*";

export const dressDescription: CollapseProps["items"] = [
  {
    key: 1,
    label: "СОСТАВ",
    children:
      "63% полиэстер, 30% вискоза, 5% шерсть, 2% эластан, Подкладка: 100% полиэстер, Отделка: 95% полиэстер, Отделка: 5% эластан.",
  },
  {
    key: 2,
    label: "УХОД ЗА ИЗДЕЛИЕМ",
    children:
      "Не стирать, не отбеливать, машинная сушка запрещена, глажение при 110ºС, профессиональная сухая чистка, мягкий режим, снять декор перед химчисткой.",
  },
  {
    key: 3,
    label: "ДОСТАВКА",
    children:
      "Вы можете выбрать наиболее подходящий для вас способ доставки товара: Курьерская доставка. Срок – от 1 дня. Доставка в пункты выдачи заказов и постаматы. Срок – от 1 дня. Доступна услуга примерки для ограниченного списка городов.",
  },
];
