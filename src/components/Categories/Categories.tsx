import React, { FC } from "react";
import { Segmented, Space, Select } from "antd";
import { categories } from "./../../utils/variables";
import { SegmentedValue } from "antd/es/segmented";
import useWindowDimensions from "./../../HOC/useWindowDimensions ";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../redux/slices/filterSlice";

interface ICategoriesProps {}

const Categories: FC<ICategoriesProps> = () => {
  const dispatch: AppDispatch = useDispatch();
  const category = useSelector((state: RootState) => state.filter.category);
  const { width } = useWindowDimensions();

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
};

export default Categories;
