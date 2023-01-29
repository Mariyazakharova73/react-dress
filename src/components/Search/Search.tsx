import React from "react";
import styles from "./Search.module.scss";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slices/filterSlice";
import loupe from "../../images/loupe.svg";
import cleaning from "../../images/cleaning.svg";

const Search: React.FC = () => {
  const dispatch = useDispatch();
  // для работы debounce
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current?.focus();
  };

  // создается только при первом рендере
  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 1000),
    []
  );

  const onChangeInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
    updateSearchValue(evt.target.value);
  };

  return (
    <div className={styles.root}>
      <img className={styles.icon} src={loupe} alt="Поиск." />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск платья..."
      />
      {value && (
        <img onClick={onClickClear} className={styles.clearIcon} src={cleaning} alt="Очистка." />
      )}
    </div>
  );
};

export default Search;
