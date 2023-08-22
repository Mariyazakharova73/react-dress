export interface IDress {
  id: string;
  title: string;
  price: number;
  imageUrl: string[];
  imageUrlDark: string[];
  sizes: number[];
  types: number[];
  rating: number;
  category: number;
}

export interface ICartDress {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  size: string;
  color: string;
  count: number;
}

export type TSize = "42" | "44" | "46" | "48";
export type TColor = "Тёмное" | "Светлое";

export enum SortPropertyEnum {
  RATING_DESC = "rating",
  RATING_ASC = "-rating",
  PRICE_DESC = "price",
  PRICE_ASC = "-price",
  TITLE_ASC = "-title",
  TITLE_DESC = "title",
}

export interface ISort {
  name: "популярности" | "цене (по убыванию)" | "цене (по возрастанию)" | "алфавиту";
  sortProperty: SortPropertyEnum;
}

export type IOrder = "asc" | "desc";

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export type ThemeTypes = "light" | "dark"
