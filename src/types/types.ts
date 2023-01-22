import { fetchDresses } from "./../redux/slices/dressSlice";
export interface ISortItem {
  name: string;
  sortProperty: string;
}

export interface ICategoriesProps {
  categoryId: number;
  onClickCategory: (index: number) => void;
}

export interface ICartItemProps {
  id: string;
  title: string;
  price: number;
  count: number;
  imageUrl: string;
  imageUrl2: string;
  type: string;
  activeType: number;
  size: number;
  onClickRemove: any;
}

export interface IPaginationProps {
  currentPage: number;
  onChangePage: (page: number) => void;
}

export interface IDressBlockProps {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  imageUrl2: string;
  handleImageClick: any;
}

export type PopupClickType = MouseEvent & { path: Node[] };

export interface IDress {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  imageUrl2: string;
  raiting: number;
}

export interface ICartItem {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  type: string;
  imageUrl2: string;
  size: number;
  count: number;
  activeType: number;
}

export interface ISort {
  name: string;
  sortProperty: "rating" | "title" | "price" | "-rating" | "-title" | "-price";
}

// redux
export interface ICartSliceState {
  totalPrice: number;
  items: ICartItem[];
}

export interface IFilterSliceState {
  searchValue: string;
  categoryId: number;
  currentPage: number;
  sort: ISort;
}

export interface IDressSliceState {
  items: IDress[];
  status: "loading" | "success" | "error";
}

// все ключи и значения - строки
export type FetchDressesType = Record<string, string>;
