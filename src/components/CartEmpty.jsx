import React from 'react';
import { Link } from 'react-router-dom';
import emptyImg from '../images/empty-cart.png';

function CartEmpty() {
  return (
    <>
      <div className="cart cart--empty">
        <h2>Корзина пуста 😕</h2>
        <p>
          Вероятнее всего, вы ещё не заказали платья.
          <br />
          Для того, чтобы сделать заказ, перейдите на главную страницу.
        </p>
        <img src={emptyImg} alt="Empty cart." />
        <Link to="/react-dress" className="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </>
  );
}

export default CartEmpty;
