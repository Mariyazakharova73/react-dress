import React from "react";
import { useDispatch } from "react-redux";
import { minusItem, addItem } from "../redux/slices/cartSlice";
import { ICartItemProps } from "../types/types";

export const CartItem: React.FC<ICartItemProps> = ({
  id,
  title,
  price,
  count,
  imageUrl,
  imageUrl2,
  type,
  activeType,
  size,
  onClickRemove,
}) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      })
    );
  };

  const onClickMinus = () => {
    if (count > 1) {
      dispatch(minusItem(id));
    }
    if (count === 1) {
      onClickRemove(id);
    }
  };

  function handleClick() {
    onClickRemove(id);
  }

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img
          className="dress-block__image"
          src={!activeType ? imageUrl : imageUrl2}
          alt={`${title}.`}
        />
      </div>
      <div className="cart__item-info">
        <h3>{title}</h3>
        <p>
          {type}, {size} p-p.
        </p>
      </div>
      <div className="cart__item-count">
        <div
          onClick={onClickMinus}
          className="button button--outline button--circle cart__item-count-minus"
        >
          -
        </div>
        <b>{count}</b>
        <div
          onClick={onClickPlus}
          className="button button--outline button--circle cart__item-count-plus"
        >
          +
        </div>
      </div>
      <div className="cart__item-price">
        <b>{price * count} руб.</b>
      </div>
      <div className="cart__item-remove">
        <div
          onClick={handleClick}
          className="button button--outline button--circle"
          style={{ color: "#dddddd" }}
        >
          x
        </div>
      </div>
    </div>
  );
};

export default CartItem;

// style={{ backgroundImage: `url(${cleaning})` }}
