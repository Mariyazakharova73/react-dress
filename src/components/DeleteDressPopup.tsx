import React from "react";
import PopupWithForm from "./Popup/PopupWithForm";
import { useDispatch } from "react-redux";
import { removeItem } from "../redux/slices/cartSlice";

const DeleteDressPopup: React.FC<any> = ({ onClose, idForDelete }) => {
  const dispatch = useDispatch();

  function handleSubmit(evt: any) {
    evt.preventDefault();
    dispatch(removeItem(idForDelete));
    onClose();
  }

  return (
    <PopupWithForm
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Удалить товар из корзины?"
    ></PopupWithForm>
  );
};

export default DeleteDressPopup;
