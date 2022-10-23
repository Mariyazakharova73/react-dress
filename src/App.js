import React from 'react';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Cart from './pages/Cart.jsx';
import DeleteDressPopup from './components/DeleteDressPopup';
import ClearCartPopup from './components/ClearCartPopup';
import ImagePopup from './components/ImagePopup';
import { Routes, Route } from 'react-router-dom';

export const SearchContext = React.createContext('');

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [isDeleteDressPopupOpen, setIsDeleteDressPopupOpen] = React.useState(false);
  const [isClearCartPopup, setIsClearCartPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedDress, setSelectedDress] = React.useState({});
  const [idForDelete, setIdForDelete] = React.useState(10);

  function closePopups() {
    setIsDeleteDressPopupOpen(false);
    setIsClearCartPopupOpen(false);
    setIsImagePopupOpen(false)
  }

  function handleTrashClick() {
    setIsClearCartPopupOpen(true);
  }

  const onClickRemove = (id) => {
    setIsDeleteDressPopupOpen(true)
    setIdForDelete(id)
  };

  function handleImageClick(dressData) {
    setIsImagePopupOpen(true)
    setSelectedDress(dressData);
  }

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/react-dress" element={<Home handleImageClick={handleImageClick}/>}></Route>
            <Route path="/cart" element={<Cart handleTrashClick={handleTrashClick} onClickRemove={onClickRemove}/>}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
        <ClearCartPopup isOpen={isClearCartPopup} onClose={closePopups} />
        <DeleteDressPopup isOpen={isDeleteDressPopupOpen} onClose={closePopups} idForDelete={idForDelete}/>
        <ImagePopup isOpen={isImagePopupOpen} onClose={closePopups} dress={selectedDress}/>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
