import React, { ChangeEvent, FC, useEffect, useRef } from "react";
import { Divider, Row } from "antd";
import s from "../App.module.css";
import { Categories, Sort, Dresses, SearchApp, PaginationApp } from "../components";
import { categories, list } from "../utils/variables";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import debounce from "lodash.debounce";
import qs from "qs";
import { SegmentedValue } from "antd/es/segmented";
import { useNavigate } from "react-router-dom";
import { selectFilter, setFilters, setSearchValue } from "../redux/slices/filterSlice";
import { fetchDresses } from "../redux/slices/dressesSlice";
import { SortPropertyEnum } from "../types/types";

const Home: FC = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const { category, sort, currentPage, searchValue } = useSelector(selectFilter);

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value));
  };

  const getCategoryNumber = (c: string | SegmentedValue) => {
    return categories.findIndex((i) => i === c);
  };

  const getSortProperty = (property: string) => {
    return property.replace("-", "") as SortPropertyEnum;
  };

  const getDresses = async () => {
    const categoryNumber = getCategoryNumber(category);
    const sortBy = getSortProperty(sort.sortProperty);
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";

    dispatch(fetchDresses({ categoryNumber, sortBy, order, searchValue, currentPage }));
  };

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const obj = list.find((item) => item.sortProperty === params.sortProperty);

      dispatch(
        setFilters({
          searchValue: searchValue,
          currentPage: Number(params.currentPage),
          sort: obj ? obj : list[0],
          category: categories[Number(params.category)],
        })
      );

      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      getDresses();
    }

    isSearch.current = false;
  }, [category, sort, searchValue, currentPage]);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        category: getCategoryNumber(category),
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [category, sort, currentPage]);

  return (
    <>
      <Row justify="center">
        <SearchApp onSearch={debounce(onSearch, 1000)} />
      </Row>
      <Row className={s.wrapper} wrap>
        <Categories />
        <Sort value={sort} />
      </Row>
      <Row>
        <Dresses />
      </Row>
      <Divider />
      <PaginationApp />
    </>
  );
};

export default Home;
