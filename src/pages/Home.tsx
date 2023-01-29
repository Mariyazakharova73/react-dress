import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import { list } from "../utils/variables.js";
import DressBlock from "../components/DressBlock";
import Skeleton from "../components/Skeleton";
import Pagination from "../components/Pagination/Pagination";
//для работы с адресной строкой
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFilter,
  setCaregoryId,
  setCurrentPage,
  setFilters,
} from "../redux/slices/filterSlice";
import { fetchDresses, selectDressData } from "../redux/slices/dressSlice";

const Home: React.FC<any> = ({ handleImageClick }) => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { categoryId, currentPage, sort, searchValue } = useSelector(selectFilter);
  const { items: dresses, status } = useSelector(selectDressData);

  const onClickCategory = (categoryNumber: number) => {
    dispatch(setCaregoryId(categoryNumber));
  };

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  // Проверяем, есть ли данные в адресной строке. И парсим, если есть
  React.useEffect(() => {
    if (window.location.search) {
      // составляем объект и передаем в редакс
      const params = qs.parse(window.location.search.substring(1));
      const sort = list.find((obj) => obj.sortProperty === params.sortProperty);
      dispatch(
        setFilters({
          searchValue: String(params.search),
          categoryId: Number(params.category),
          currentPage: Number(params.currentPage),
          sort: sort || list[0],
        })
      );
      isSearch.current = true;
    }
  }, []);

  // в адресную строку
  React.useEffect(() => {
    // если изменили параметры и был первый рендер
    if (isMounted.current) {
      const string = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });
      // передаем в адресную строку данные
      navigate(`?${string}`);
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, currentPage]);

  const getDresses = () => {
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";
    //@ts-ignore
    dispatch(fetchDresses({ sortBy, order, category, search, currentPage }));
    window.scrollTo(0, 0);
  };

  // Платья
  React.useEffect(() => {
    if (!isSearch.current) {
      getDresses();
    }
    isSearch.current = false;
  }, [categoryId, sort, searchValue, currentPage]);

  const arr = dresses.map((item: any) => (
    <DressBlock key={item.id} {...item} handleImageClick={handleImageClick} />
  ));
  const skeletons = [...new Array(4)].map((item, index) => <Skeleton key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryId={categoryId} onClickCategory={onClickCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все платья</h2>
      {status === "error" ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>К сожалению, не удалось загрузить платья. Попробуйте повторить попытку позже.</p>
        </div>
      ) : (
        <div className="content__items">{status === "loading" ? skeletons : arr}</div>
      )}
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
