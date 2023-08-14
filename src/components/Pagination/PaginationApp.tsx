import React, { FC } from "react";
import { Pagination, PaginationProps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { setCurrentPage } from "../../redux/slices/filterSlice";

interface IPaginationAppProps {}

const PaginationApp: FC<IPaginationAppProps> = () => {
  const currentPage = useSelector((state: RootState) => state.filter.currentPage);
  const dispatch: AppDispatch = useDispatch();

  const onChangePage: PaginationProps["onChange"] = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <Pagination current={currentPage} onChange={onChangePage} total={10} defaultPageSize={4} />
  );
};

export default PaginationApp;
