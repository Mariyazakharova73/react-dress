import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import DeleteDressPopup from './components/DeleteDressPopup';
import ClearCartPopup from './components/ClearCartPopup';
import ImagePopup from './components/ImagePopup';
import Popup from './components/Popup/Popup';
import { Routes, Route } from 'react-router-dom';
import FullDress from './pages/FullDress';

const App: React.FC = () => {
  const [isDeleteDressPopupOpen, setIsDeleteDressPopupOpen] = React.useState(false);
  const [isClearCartPopup, setIsClearCartPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedDress, setSelectedDress] = React.useState({});
  const [idForDelete, setIdForDelete] = React.useState('');

  function closePopups() {
    setIsDeleteDressPopupOpen(false);
    setIsClearCartPopupOpen(false);
    setIsImagePopupOpen(false);
  }

  function handleTrashClick() {
    setIsClearCartPopupOpen(true);
  }

  const onClickRemove = (id: any) => {
    setIsDeleteDressPopupOpen(true);
    setIdForDelete(id);
  };

  function handleImageClick(dressData:any) {
    setIsImagePopupOpen(true);
    setSelectedDress(dressData);
  }

  const closeByOverlay = (evt: any) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopups();
    }
  };

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/react-dress" element={<Home handleImageClick={handleImageClick} />}/>
          <Route path="/dress/:id" element={<FullDress/>}/>
          <Route
            path="/cart"
            element={<Cart handleTrashClick={handleTrashClick} onClickRemove={onClickRemove} />}
          />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
      <Popup
        name="delete-button"
        isOpen={isClearCartPopup}
        onClose={closePopups}
        closeByOverlay={closeByOverlay}
      >
        <ClearCartPopup onClose={closePopups} />
      </Popup>
      <Popup
        name="delete-button"
        isOpen={isDeleteDressPopupOpen}
        onClose={closePopups}
        closeByOverlay={closeByOverlay}
      >
        <DeleteDressPopup onClose={closePopups} idForDelete={idForDelete} />
      </Popup>
      <Popup
        name="click-image"
        isOpen={isImagePopupOpen}
        onClose={closePopups}
        closeByOverlay={closeByOverlay}
      >
        <ImagePopup onClose={closePopups} dress={selectedDress} />
      </Popup>
    </div>
  );
}

export default App;
