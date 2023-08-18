import React, { FC } from "react";
import { Pagination, PaginationProps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { selectCurrentPage, setCurrentPage } from "../../redux/slices/filterSlice";

const PaginationApp: FC = () => {
  const currentPage = useSelector(selectCurrentPage);
  const dispatch: AppDispatch = useDispatch();

  const onChangePage: PaginationProps["onChange"] = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <Pagination current={currentPage} onChange={onChangePage} total={10} defaultPageSize={4} />
  );
};

export default PaginationApp;
