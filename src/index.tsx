import ReactDOM from 'react-dom/client';
import '../src/scss/app.scss';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store.js';
import { Provider } from 'react-redux';

 const rootElem = document.getElementById('root')
 
 if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);
  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
 }

