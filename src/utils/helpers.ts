import { ICartDress } from "../types/types";

export const getTotalDressCount = (items: ICartDress[]) => {
  return items.reduce((sum, item) => sum + item.count, 0);
};

export const getTotalPrice = (items: ICartDress[]) => {
  return items.reduce((sum, item) => {
    return item.price * item.count + sum;
  }, 0);
};
