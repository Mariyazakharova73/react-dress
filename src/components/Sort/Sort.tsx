import React, { FC } from "react";
import { Typography, Select } from "antd";
import s from "./Sort.module.css";
import { list } from "../../utils/variables";
const { Text } = Typography;

interface ISortProps {
  sort: string;
  handleChange: (newValue: string) => void;
}

const Sort: FC<ISortProps> = ({sort, handleChange}) => {
  return (
    <div>
      <Text className={s.text}>Сортировка по:</Text>
      <Select
        bordered={false}
        value={sort}
        onChange={handleChange}
        options={list.map((item) => ({ label: item.name, value: item.name }))}
      />
    </div>
  );
};

export default Sort;
