import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import DressBlock from '../components/DressBlock';
import Skeleton from '../components/Skeleton';
import Pagination from '../components/Pagination/Pagination';
import { SearchContext } from '../App.js';
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCaregoryId, setCurrentPage } from '../redux/slices/filterSlice';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categoryId, sortType, currentPage } = useSelector((state) => state.filter);
  const { searchValue } = React.useContext(SearchContext);
  const [dress, setDress] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  // const [categoryId, setCategoryId] = React.useState([]);
  // const [sortType, setSortType] = React.useState({ name: 'популярности', sortProperty: 'raiting' });
  // const [numberPage, setNumberPage] = React.useState(1);

  const onClickCategory = (category) => {
    dispatch(setCaregoryId(category));
    // console.log(setCaregoryId(id))
    // {type: 'filters/setCaregoryId', payload: 1}
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  //В АДРЕСНУЮ СТРОКУ
  React.useEffect(() => {
    const string = qs.stringify({
      sortProperty: sortType.sortProperty,
      categoryId,
      currentPage,
    });
    navigate(`?${string}`);
    // console.log(string);
  }, [categoryId, sortType.sortProperty, currentPage]);

  //ПИЦЦЫ
  React.useEffect(() => {
    setLoading(true);
    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    axios
      .get(
        `https://631cd2604fa7d3264cb78455.mockapi.io/items?page=${currentPage}&limit=10&${category}&sortBy=${sortBy}&order=${order}${search}`
      )
      .then((res) => {
        setDress(res.data);
        setLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType.sortProperty, searchValue, currentPage]);

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
      {/* <Pagination currentPage={currentPage} onChangePage={onChangePage} /> */}
    </div>
  );
};

export default Home;
