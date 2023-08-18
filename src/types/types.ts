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

export type ISortProperty = "-rating" | "price" | "-price" | "-title" | "title" | "-rating";

export interface ISort {
  name: "популярности" | "цене (по убыванию)" | "цене (по возрастанию)" | "алфавиту";
  sortProperty: ISortProperty;
}

export type IOrder = "asc" | "desc";
