import React from "react";
import { Input } from "antd";
import s from "./SearchApp.module.css";
const { Search } = Input;

const SearchApp: React.FC = () => {
  const onSearch = (value: string) => console.log(value);

  return (
    <Search
      className={s.search}
      size="large"
      placeholder="Поиск платья..."
      allowClear
      onSearch={onSearch}
      //loading
    />
  );
};

export default SearchApp;
