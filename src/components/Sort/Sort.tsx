import React, { useState } from "react";
import { Typography, Select } from "antd";
import s from "./Sort.module.css";
import { list } from "../../utils/variables";
const { Text } = Typography;

const Sort: React.FC = () => {
  const [category, setCategory] = useState<string>("популярности");

  const handleChange = (newValue: string) => {
    console.log(newValue);
    setCategory(newValue);
  };
  return (
    <div>
      <Text className={s.text}>Сортировка по:</Text>
      <Select
        bordered={false}
        
        value={category}
        onChange={handleChange}
        options={list.map((item) => ({ label: item.name, value: item.name }))}
      />
    </div>
  );
};

export default Sort;