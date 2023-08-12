import React, { FC } from "react";
import { Segmented, Space, Select } from "antd";
import { categories } from "./../../utils/variables";
import { SegmentedValue } from "antd/es/segmented";
import useWindowDimensions from "./../../HOC/useWindowDimensions ";

interface ICategoriesProps {
  category: string | SegmentedValue;
  handleCategoryChange: (e: SegmentedValue) => void;
  handleCategorySelect: (newValue: string) => void;
}

const Categories: FC<ICategoriesProps> = ({
  category,
  handleCategoryChange,
  handleCategorySelect,
}) => {
  const { width } = useWindowDimensions();

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
