import { ICartDress, IDress } from "../types/types";

export const getTotalDressCount = (items: ICartDress[]) => {
  return items.reduce((sum, item) => sum + item.count, 0);
};

export const getTotalPrice = (items: ICartDress[]) => {
  return items.reduce((sum, item) => {
    return item.price * item.count + sum;
  }, 0);
};

export const getImageUrlArr = (color: string, item: IDress)=> {
 return  color === "Светлое" ? item.imageUrl : item.imageUrlDark
}

export const getImageUrl = (color: string, item: IDress)=> {
  return  color === "Светлое" ? item.imageUrl[0] : item.imageUrlDark[0]
 }