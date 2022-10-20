import React from 'react';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Cart from './pages/Cart.jsx';
import DeleteDressPopup from './components/DeleteDressPopup';
import ClearCartPopup from './components/ClearCartPopup';
import { Routes, Route } from 'react-router-dom';

export const SearchContext = React.createContext('');

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [isPopupCartOpen, setIsPopupCartOpen] = React.useState(false);
  const [idForDelete, setIdForDelete] = React.useState(10);

  function closePopups() {
    setIsPopupOpen(false);
    setIsPopupCartOpen(false);
  }

  function handleTrashClick() {
    setIsPopupCartOpen(true); //открываем попап
  }

  const onClickRemove = (id) => {
    setIsPopupOpen(true)
    setIdForDelete(id)
  };

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/react-dress" element={<Home />}></Route>
            <Route path="/cart" element={<Cart handleTrashClick={handleTrashClick} onClickRemove={onClickRemove}/>}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
        <ClearCartPopup isOpen={isPopupCartOpen} onClose={closePopups} />
        <DeleteDressPopup isOpen={isPopupOpen} onClose={closePopups} idForDelete={idForDelete}/>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
