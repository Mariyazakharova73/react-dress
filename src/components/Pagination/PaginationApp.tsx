import React, { FC } from "react";
import { Pagination } from "antd";

interface IPaginationAppProps {
  currentPage: number;
  onChangePage: (page: number, pageSize: number) => void;
}

const PaginationApp: FC<IPaginationAppProps> = ({ onChangePage, currentPage }) => {
  return <Pagination current={currentPage} onChange={onChangePage} total={10} defaultPageSize={4}/>;
};

export default PaginationApp;
