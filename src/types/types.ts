export interface IDress {
  id: string;
  title: string;
  price: number;
  imageUrl: string[];
  imageUrlDark: string[];
  sizes: number[];
  types: number[];
  raiting: number;
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
