import React, { FC } from "react";
import { Typography, Select } from "antd";
import s from "./Sort.module.css";
import { list } from "../../utils/variables";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { selectSort, setSort } from "../../redux/slices/filterSlice";
const { Text } = Typography;

interface ISortProps {}

const Sort: FC<ISortProps> = () => {
  const dispatch: AppDispatch = useDispatch();
  const sort = useSelector(selectSort);

  const handleChange = (newValue: string) => {
    const obj = list.find((item) => item.name === newValue);
    dispatch(setSort(obj));
  };

  return (
    <div>
      <Text className={s.text}>Сортировка по:</Text>
      <Select
        bordered={false}
        value={sort.name}
        onChange={handleChange}
        options={list.map((item) => ({ label: item.name, value: item.name }))}
      />
    </div>
  );
};

export default Sort;
