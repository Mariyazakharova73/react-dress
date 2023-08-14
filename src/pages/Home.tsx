import React, { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { Divider, Row } from "antd";
import s from "../App.module.css";
import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import Dresses from "../components/Dresses/Dresses";
import SearchApp from "../components/SearchApp/SearchApp";
import { BASE_URL, categories, list } from "../utils/variables";
import { IDress } from "./../types/types";
import PaginationApp from "./../components/Pagination/PaginationApp";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import axios from "axios";
import debounce from "lodash.debounce";
import qs from "qs";
import { SegmentedValue } from "antd/es/segmented";
import { useNavigate } from "react-router-dom";
import { setFilters } from "../redux/slices/filterSlice";

const Home: FC = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);
  const { category, sort } = useSelector((state: RootState) => state.filter);
  const currentPage = useSelector((state: RootState) => state.filter.currentPage);

  const [dresses, setDresses] = useState<IDress[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [serchValue, setSearchValue] = useState<string>("");

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const getCategoryNumber = (c: string | SegmentedValue) => {
    return categories.findIndex((i) => i === c);
  };

  const getSortProperty = (s: string) => {
    return s.replace("-", "");
  };

  const fetchDresses = () => {
    const categoryNumber = getCategoryNumber(category);
    const sortBy = getSortProperty(sort.sortProperty);
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";

    setIsLoading(true);

    axios
      .get(
        `${BASE_URL}?page=${currentPage}&limit=4&category=${
          categoryNumber > 0 ? categoryNumber : ""
        }&sortBy=${sortBy}&order=${order}&search=${serchValue}`
      )
      .then((res) => {
        setDresses(res.data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      console.log(params);
      const obj = list.find((item) => item.sortProperty === params.sortProperty);
      dispatch(
        setFilters({
          currentPage: params.currentPage,
          sort: obj,
          category: categories[Number(params.category)],
        })
      );
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      fetchDresses();
    }

    isSearch.current = false;
  }, [category, sort, serchValue, currentPage]);

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
        <Sort />
      </Row>
      <Row>
        <Dresses dresses={dresses} isLoading={isLoading} />
      </Row>
      <Divider />
      <PaginationApp />
    </>
  );
};

export default Home;
