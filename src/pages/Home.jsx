import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/Skeleton';

const Home = () => {
  const [pizzas, setPizzas] = React.useState([]);
  const [loading, setLoading] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    fetch('https://631cd2604fa7d3264cb78455.mockapi.io/items')
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
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
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
