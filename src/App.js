import React from 'react';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Cart from './pages/Cart.jsx';
import Popup from './components/Popup/Popup';
import { Routes, Route } from 'react-router-dom';

export const SearchContext = React.createContext('');

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [loadingData, setLoadingData] = React.useState(false);

  function closePopups() {
    setIsPopupOpen(false);
  }

  function handleTrashClick() {
    setIsPopupOpen(true); //открываем попап
    
  }

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/react-dress" element={<Home />}></Route>
            <Route path="/cart" element={<Cart handleTrashClick={handleTrashClick}/>}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
        <Popup isOpen={isPopupOpen} onClose={closePopups} loadingData={loadingData} />
      </SearchContext.Provider>
    </div>
  );
}

export default App;
