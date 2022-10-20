import React from 'react';
import Popup from './Popup/Popup';
import { useDispatch } from 'react-redux';
import { removeItem } from '../redux/slices/cartSlice';

function DeleteDressPopup({ isOpen, onClose, idForDelete }) {
  const dispatch = useDispatch();
  console.log(idForDelete)

  function handleSubmit(evt) {
    evt.preventDefault();
    dispatch(removeItem(idForDelete));
    onClose();
  }

  return (
    <Popup onClose={onClose} isOpen={isOpen} onSubmit={handleSubmit} title="Удалить товар?"></Popup>
  );
}

export default DeleteDressPopup;
