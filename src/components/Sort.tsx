import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSort, setSort } from "../redux/slices/filterSlice";
import { ISortItem, PopupClickType } from "../types/types";
import { list } from "../utils/variables.js";
import icon from "../images/icon.svg";

const Sort: React.FC = () => {
  const dispatch = useDispatch();
  const sort = useSelector(selectSort);
  const sortRef = React.useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = React.useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const onClickListItem = (obj: any) => {
    dispatch(setSort(obj));
    setIsVisible(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (evt: MouseEvent) => {
      // переопределяем тип с path
      const _evt = evt as PopupClickType;
      if (sortRef.current && !_evt.path.includes(sortRef.current)) {
        setIsVisible(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="sort" ref={sortRef}>
      <div className="sort__label">
        <img src={icon} alt="Иконка." />
        &nbsp;
        <b>Сортировка по:</b>
        <span onClick={handleClick}>{sort.name}</span>
      </div>
      {isVisible ? (
        <div className="sort__popup">
          <ul>
            {list.map((obj, index) => (
              <li
                onClick={() => onClickListItem(obj)}
                className={sort.sortProperty === obj.sortProperty ? "active" : ""}
                key={index}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Sort;
