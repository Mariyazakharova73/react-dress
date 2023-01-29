import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, selectCartItemById } from "../redux/slices/cartSlice";
import { IDressBlockProps, ICartItem } from "../types/types";
import { typeNames } from "../utils/variables";

const DressBlock: React.FC<IDressBlockProps> = ({
  id,
  title,
  price,
  imageUrl,
  sizes,
  types,
  imageUrl2,
  handleImageClick,
}) => {
  const dispatch = useDispatch();
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const cartItem = useSelector(selectCartItemById(id));
  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item: ICartItem = {
      id,
      title,
      price,
      imageUrl,
      imageUrl2,
      type: typeNames[activeType],
      size: sizes[activeSize],
      activeType,
      count: 0,
    };
    dispatch(addItem(item));
  };

  const onClickImage = () => {
    const item: ICartItem = {
      id,
      title,
      price,
      imageUrl,
      imageUrl2,
      type: typeNames[activeType],
      size: sizes[activeSize],
      activeType,
      count: 0,
    };
    handleImageClick(item);
  };

  return (
    <div className="dress-block-wrapper">
      <div className="dress-block">
        <img
          className="dress-block__image"
          src={!activeType ? imageUrl : imageUrl2}
          alt={`${title}.`}
          onClick={onClickImage}
        />
        <h4 className="dress-block__title">{title}</h4>
        <div className="dress-block__selector">
          <ul>
            {/* [ 0, 1 ] */}
            {types.map((item, index) => (
              <li
                onClick={() => setActiveType(item)}
                className={activeType === item ? "active" : ""}
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
                className={activeSize === index ? "active" : ""}
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
            +&nbsp;
            <span>Добавить</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
};
export default DressBlock;
