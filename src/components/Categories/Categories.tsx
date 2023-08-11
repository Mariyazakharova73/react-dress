import React, { useState } from "react";
import { Segmented, Space, Select } from "antd";
import { categories } from "./../../utils/variables";
import { SegmentedValue } from "antd/es/segmented";
import useWindowDimensions from "./../../HOC/useWindowDimensions ";

const Categories: React.FC = () => {
  const { width } = useWindowDimensions();
  const [category, setCategory] = useState<string | SegmentedValue>("Все");

  const handleCategoryChange = (e: SegmentedValue) => {
    console.log(e);
    setCategory(e);
  };

  const handleCategorySelect = (newValue: string) => {
    console.log(newValue);
    setCategory(newValue);
  };

  return (
    <div>
      {width >= 768 && (
        <Space direction="vertical">
          <Segmented
            options={categories}
            value={category}
            onChange={handleCategoryChange}
            wrap="wrap"
            size="middle"
          />
        </Space>
      )}
      {width < 768 && (
        <Select
          style={{ width: 200 }}
          value={category as string}
          onChange={handleCategorySelect}
          options={categories.map((c) => ({ label: c, value: c }))}
        />
      )}
    </div>
  );
};

export default Categories;
