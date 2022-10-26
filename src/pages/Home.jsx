import React from 'react';
import Categories from '../components/Categories';
import Sort, { list } from '../components/Sort';
import DressBlock from '../components/DressBlock';
import Skeleton from '../components/Skeleton';
import Pagination from '../components/Pagination/Pagination';
//для работы с адресной строкой
import qs from 'qs';
//для работы с адресной строкой
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectFilter,
  setCaregoryId,
  setCurrentPage,
  setFilters,
} from '../redux/slices/filterSlice';
import { fetchDresses, selectDressData } from '../redux/slices/dressSlice';

const Home = ({ handleImageClick }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { categoryId, currentPage, sort, searchValue } = useSelector(selectFilter);
  const { items: dresses, status } = useSelector(selectDressData);

  const onClickCategory = (categoryNumber) => {
    dispatch(setCaregoryId(categoryNumber));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  //если был первый рендер, парсим параметры из адресной строки
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = list.find((obj) => obj.sortProperty === params.sortProperty);
      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
      isSearch.current = true;
    }
  }, []);

  //В АДРЕСНУЮ СТРОКУ
  React.useEffect(() => {
    //если изменили параметры и был первый рендер
    if (isMounted.current) {
      const string = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });
      //передаем в адресную строку нашу строку
      navigate(`?${string}`);
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, currentPage]);

  const getDresses = () => {
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(fetchDresses({ sortBy, order, category, search, currentPage }));
    window.scrollTo(0, 0);
  };

  //Платья
  React.useEffect(() => {
    if (!isSearch.current) {
      getDresses();
    }
    isSearch.current = false;
  }, [categoryId, sort, searchValue, currentPage]);
  // const filterArr = pizzas.filter((obj) => {
  //   if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });
  const arr = dresses.map((item) => (
    // <Link key={item.id} to={`/dress/${item.id}`}></Link>
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
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>К сожалению, не удалось загрузить платья. Попробуйте повторить попытку позже.</p>
        </div>
      ) : (
        <div className="content__items">{status === 'loading' ? skeletons : arr}</div>
      )}
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
