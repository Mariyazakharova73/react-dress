import React from 'react';
import Categories from '../components/Categories';
import Sort, { list } from '../components/Sort';
import DressBlock from '../components/DressBlock';
import Skeleton from '../components/Skeleton';
import Pagination from '../components/Pagination/Pagination';
import { SearchContext } from '../App.js';
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCaregoryId, setCurrentPage, setFilters } from '../redux/slices/filterSlice';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  //берем информацию из редакса
  const { categoryId, currentPage, sort } = useSelector((state) => state.filter);

  const { searchValue } = React.useContext(SearchContext);
  const [dress, setDress] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const onClickCategory = (categoryNumber) => {
    //передаем в reduser данные categoryNumber
    dispatch(setCaregoryId(categoryNumber));
    // console.log(setCaregoryId(categoryNumber))
    // {type: 'filter/setCaregoryId', payload: 1}
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  //если был первый рендер, парсим параметры из адресной строки
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = list.find((obj) => obj.sortProperty === params.sortProperty);
      //передаем в редакс
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

  //ПИЦЦЫ
  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      setLoading(true);
      const sortBy = sort.sortProperty.replace('-', '');
      const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
      const category = categoryId > 0 ? `category=${categoryId}` : '';
      const search = searchValue ? `&search=${searchValue}` : '';

      axios
        .get(
          `https://631cd2604fa7d3264cb78455.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
        )
        .then((res) => {
          setDress(res.data);
          setLoading(false);
        });
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
  const arr = dress.map((item) => <DressBlock key={item.id} {...item} />);
  const skeletons = [...new Array(4)].map((item, index) => <Skeleton key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryId={categoryId} onClickCategory={onClickCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все платья</h2>
      <div className="content__items">{loading ? skeletons : arr}</div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
