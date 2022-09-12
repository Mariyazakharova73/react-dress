import React from 'react';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Cart from './pages/Cart.jsx';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/slices/filterSlice'

export const SearchContext = React.createContext('');

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  return (
    <div className="wrapper">
      {/* <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button> */}
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/react-pizza" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
