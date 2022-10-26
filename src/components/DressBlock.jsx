import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem, selectCartItemById } from '../redux/slices/cartSlice';

const typeNames = ['светлое', 'темное'];

function DressBlock({ id, title, price, imageUrl, sizes, types, imageUrl2, handleImageClick }) {
  const dispatch = useDispatch();
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const cartItem = useSelector(selectCartItemById(id));
  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      imageUrl2,
      type: typeNames[activeType],
      size: sizes[activeSize],
      activeType,
    };
    dispatch(addItem(item));
  };

  const onClickImage = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      imageUrl2,
      type: typeNames[activeType],
      size: sizes[activeSize],
      activeType,
    };
    handleImageClick(item);
  };

  return (
    <div className="dress-block-wrapper">
      <div className="dress-block">
        {/* <Link to={`/dress/${id}`}> */}
          <img
            className="dress-block__image"
            src={!activeType ? imageUrl : imageUrl2}
            alt={`${title}.`}
            onClick={onClickImage}
          />
        {/* </Link> */}
        <h4 className="dress-block__title">{title}</h4>
        <div className="dress-block__selector">
          <ul>
            {/* [ 0, 1 ] */}
            {types.map((item, index) => (
              <li
                onClick={() => setActiveType(item)}
                className={activeType === item ? 'active' : ''}
                key={index}
              >
                {typeNames[item]}
              </li>
            ))}
          </ul>
          <ul>
            {/* [ 42, 44, 46 ] */}
            {sizes.map((item, index) => (
              <li
                onClick={() => setActiveSize(index)}
                className={activeSize === index ? 'active' : ''}
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="dress-block__bottom">
          <div className="dress-block__price">{price}₽</div>
          <button onClick={onClickAdd} className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
}
export default DressBlock;
