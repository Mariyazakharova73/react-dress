export interface ISortItem  {
  name: string;
  sortProperty: string;
}

export interface ICategoriesProps {
  categoryId: number;
  onClickCategory: any;
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
  onChangePage: any;
};

export interface IPizzaBlockProps {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[]; 
  imageUrl2: string; 
  handleImageClick: any;
}