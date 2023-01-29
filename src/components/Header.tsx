import logo from "../images/dress.svg";
import { Link, useLocation } from "react-router-dom";
import Search from "./Search/Search";
import { useSelector } from "react-redux";
import { selectCart } from "../redux/slices/cartSlice";
import cart from "../images/cart.svg";

const Header: React.FC = () => {
  const { items, totalPrice } = useSelector(selectCart);
  const location = useLocation();

  const totalCount = items.reduce((sum: number, item: any) => {
    return item.count + sum;
  }, 0);

  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link to="react-dress">
            <div className="header__logo">
              <img src={logo} alt="dress logo." />
              <h1>React Dress</h1>
            </div>
          </Link>
          {location.pathname !== "/cart" && (
            <div className="header__cart">
              <Link to="/cart" className="button button--cart">
                <span>{totalPrice} ₽</span>
                <div className="button__delimiter"></div>
                <img src={cart} alt="Корзина." />
                <span>{totalCount}</span>
              </Link>
            </div>
          )}
        </div>
        {location.pathname !== "/cart" && <Search />}
      </div>
    </div>
  );
};

export default Header;
