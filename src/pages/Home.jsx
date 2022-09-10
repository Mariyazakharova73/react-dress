import React from 'react'
import Categories from './components/Categories';
import Sort from './components/Sort';
// import Spinner from './components/Spinner';
import PizzaBlock from './components/PizzaBlock';
import Skeleton from './components/Skeleton';

export const Home = () => {
  return (
    <>
      <div className="content__top">
      <Categories />
      <Sort />
    </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">
      {loading
        ? [...new Array(6)].map((item, index) => <Skeleton key={index}/>)
        : pizzas.map((item) => <PizzaBlock key={item.id} {...item} />)}
    </div>
    </>
  )
}
