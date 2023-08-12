import React, { FC, useEffect, useState } from "react";
import { Row } from "antd";
import s from "../App.module.css";
import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import Dresses from "../components/Dresses/Dresses";
import SearchApp from "../components/SearchApp/SearchApp";
import { BASE_URL, list } from "../utils/variables";
import { SegmentedValue } from "antd/es/segmented";
import { categories } from "./../utils/variables";

const Home: FC = () => {
  const [dresses, setDresses] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [category, setCategory] = useState<string | SegmentedValue>("Все");
  const [sort, setSort] = useState<string>("популярности");

  const handleChange = (newValue: string) => {
    console.log(newValue);
    setSort(newValue);
  };

  const handleCategoryChange = (e: SegmentedValue) => {
    console.log(e);
    setCategory(e);
  };

  const handleCategorySelect = (newValue: string) => {
    console.log(newValue);
    setCategory(newValue);
  };

  useEffect(() => {
    const x = categories.findIndex((i) => i === category);
    const obj = list.find((item) => item.name === sort);
    const order = obj?.sortProperty.includes("-") ? "asc" : "desc";
    console.log(obj?.sortProperty);
    setIsLoading(true);
    fetch(
      `${BASE_URL}?category=${x > 0 ? x : ""}&sortBy=${obj?.sortProperty?.replace("-", "")}&order=${order}`
    )
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setDresses(res);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [category, sort]);
  return (
    <>
      <Row justify="center">
        <SearchApp />
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
    </>
  );
};

export default Home;
