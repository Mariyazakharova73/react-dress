import React, { FC } from "react";
import { Typography, Select } from "antd";
import s from "./Sort.module.css";
import { list } from "../../utils/variables";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setSort } from "../../redux/slices/filterSlice";
import { ISort } from "../../types/types";
const { Text } = Typography;

interface ISortProps {
  value: ISort;
}

export const Sort: FC<ISortProps> = React.memo(({ value }) => {
  const dispatch: AppDispatch = useDispatch();

  const handleChange = (newValue: string) => {
    const obj = list.find((item) => item.name === newValue);
    obj && dispatch(setSort(obj));
  };

  return (
    <div>
      <Text className={s.text}>Сортировка по:</Text>
      <Select
        bordered={false}
        value={value.name}
        onChange={handleChange}
        options={list.map((item) => ({ label: item.name, value: item.name }))}
      />
    </div>
  );
});
