import React from 'react';
import Popup from './Popup/Popup';
import { useDispatch } from 'react-redux';
import { clearItems } from '../redux/slices/cartSlice';

function ClearCartPopup({ isOpen, onClose }) {
  const dispatch = useDispatch();
  console.log('clear')
  function handleSubmit(evt) {
    evt.preventDefault();
    //dispatch(clearItems());
    onClose();
  }

  return (
    <Popup
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      title="Очистить корзину?"
    ></Popup>
  );
}

export default ClearCartPopup;
