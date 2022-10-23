import React from 'react';
import PopupWithForm from './Popup/PopupWithForm';
import { useDispatch } from 'react-redux';
import { removeItem } from '../redux/slices/cartSlice';

function DeleteDressPopup({ onClose, idForDelete,  }) {
  const dispatch = useDispatch();
  console.log(idForDelete)

  function handleSubmit(evt) {
    evt.preventDefault();
    dispatch(removeItem(idForDelete));
    onClose();
  }

  return (
    <PopupWithForm onClose={onClose} onSubmit={handleSubmit} title="Удалить товар?"></PopupWithForm>
  );
}

export default DeleteDressPopup;
