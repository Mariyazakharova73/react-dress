import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { Divider, Row } from "antd";
import s from "../App.module.css";
import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import Dresses from "../components/Dresses/Dresses";
import SearchApp from "../components/SearchApp/SearchApp";
import { BASE_URL, list } from "../utils/variables";
import { SegmentedValue } from "antd/es/segmented";
import { categories } from "./../utils/variables";
import { IDress } from "./../types/types";
import PaginationApp from "./../components/Pagination/PaginationApp";
import type { PaginationProps } from "antd";

const Home: FC = () => {
  const [dresses, setDresses] = useState<IDress[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [category, setCategory] = useState<string | SegmentedValue>("Все");
  const [sort, setSort] = useState<string>("популярности");
  const [serchValue, setSearchValue] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const onChangePage: PaginationProps["onChange"] = (page: number) => {
    console.log(page);
    setCurrentPage(page);
  };

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleChange = (newValue: string) => {
    //console.log(newValue);
    setSort(newValue);
  };

  const handleCategoryChange = (e: SegmentedValue) => {
    //console.log(e);
    setCategory(e);
  };

  const handleCategorySelect = (newValue: string) => {
    //console.log(newValue);
    setCategory(newValue);
  };

  useEffect(() => {
    const categoryStr = categories.findIndex((i) => i === category);
    const sortBy = list.find((item) => item.name === sort)?.sortProperty;
    const sortByStr = sortBy?.replace("-", "");
    const order = sortBy?.includes("-") ? "asc" : "desc";

    setIsLoading(true);
    fetch(
      `${BASE_URL}?page=${currentPage}&limit=4&category=${
        categoryStr > 0 ? categoryStr : ""
      }&sortBy=${sortByStr}&order=${order}&search=${serchValue}`
    )
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setDresses(res);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [category, sort, serchValue, currentPage]);
  return (
    <>
      <Row justify="center">
        <SearchApp onSearch={onSearch} />
      </Row>
      <Row className={s.wrapper} wrap>
        <Categories
          category={category}
          handleCategoryChange={handleCategoryChange}
          handleCategorySelect={handleCategorySelect}
        />
        <Sort sort={sort} handleChange={handleChange} />
      </Row>
      <Row>
        <Dresses dresses={dresses} isLoading={isLoading} />
      </Row>
      <Divider />
      <PaginationApp onChangePage={onChangePage} currentPage={currentPage} />
    </>
  );
};

export default Home;
