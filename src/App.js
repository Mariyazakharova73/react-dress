import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
// import Spinner from './components/Spinner';
import PizzaBlock from './components/PizzaBlock';
import Skeleton from './components/Skeleton';

function App() {
  const [pizzas, setPizzas] = React.useState([]);
  const [loading, setLoading] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    fetch('https://631cd2604fa7d3264cb78455.mockapi.io/items')
      .then((response) => response.json())
      .then((res) => {
        setPizzas(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">

        </div>
      </div>
    </div>
  );
}

export default App;
