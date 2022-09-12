import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/Skeleton';

const Home = () => {
  const [pizzas, setPizzas] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState([]);
  const [sortType, setSortType] = React.useState({ name: 'популярности', sortProperty: 'raiting' });

  React.useEffect(() => {
    setLoading(true);


const sortBy =sortType.sortProperty.replace('-', '');
const order = sortType.sortProperty.includes('-') ? 'asc' :'desc';
const category = categoryId > 0 ? `category=${categoryId}` : ''

    fetch(
      `https://631cd2604fa7d3264cb78455.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
    )
      .then((response) => response.json())
      .then((res) => {
        setPizzas(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryId={categoryId} onClickCategory={(id) => setCategoryId(id)} />
        <Sort sortType={sortType} onClickSort={(obj) => setSortType(obj)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {loading
          ? [...new Array(6)].map((item, index) => <Skeleton key={index} />)
          : pizzas.map((item) => <PizzaBlock key={item.id} {...item} />)}
      </div>
    </div>
  );
};

export default Home;
