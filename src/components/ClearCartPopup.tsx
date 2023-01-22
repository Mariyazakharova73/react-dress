import React from "react";
import PopupWithForm from "./Popup/PopupWithForm";
import { useDispatch } from "react-redux";
import { clearItems } from "../redux/slices/cartSlice";

const ClearCartPopup: React.FC<any> = ({ onClose }) => {
  const dispatch = useDispatch();

  function handleSubmit(evt: React.ChangeEvent<HTMLInputElement>) {
    evt.preventDefault();
    dispatch(clearItems());
    onClose();
  }

  return (
    <PopupWithForm
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Очистить корзину?"
    ></PopupWithForm>
  );
};

export default ClearCartPopup;
