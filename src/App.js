import React from 'react';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Cart from './pages/Cart.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
          <Routes>
            <Route path="/react-pizza" element={<Home/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>
      </div>
    </div>
  );
}

export default App;
