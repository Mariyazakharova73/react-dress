import React, { ChangeEvent, FC } from "react";
import { Input } from "antd";
import s from "./SearchApp.module.css";
import { SearchOutlined } from "@ant-design/icons";


interface ISearchAppProps {
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchApp: FC<ISearchAppProps> = ({ onSearch }) => {
  return (
    <Input
      className={s.search}
      prefix={<SearchOutlined />}
      placeholder="Поиск платья..."
      allowClear
      onChange={onSearch}
      size="large"
      //onSearch={onSearch}
      //loading
    />
  );
};

export default SearchApp;
