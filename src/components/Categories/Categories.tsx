import React, { FC } from "react";
import { Segmented, Space, Select } from "antd";
import { categories } from "./../../utils/variables";
import { SegmentedValue } from "antd/es/segmented";
import useWindowDimensions from "./../../HOC/useWindowDimensions ";
import { AppDispatch } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory, setCategory } from "../../redux/slices/filterSlice";

export const Categories: FC = React.memo(() => {
  const { width } = useWindowDimensions();
  const dispatch: AppDispatch = useDispatch();
  const category = useSelector(selectCategory);

  const handleCategoryChange = (e: SegmentedValue) => {
    dispatch(setCategory(e as string));
  };

  const handleCategorySelect = (newValue: string) => {
    dispatch(setCategory(newValue));
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
});
