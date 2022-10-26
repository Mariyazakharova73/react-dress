import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function FullDress() {
  const [dress, setDress] = React.useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchDress() {
      try {
        const data = await axios.get(
          'https://631cd2604fa7d3264cb78455.mockapi.io/items/' + id
        );
        setDress(data);
      } catch (err) {
        console.log(err)
        navigate('/react-dress')
      }
    }
    fetchDress();

  }, []);

if (!dress.data) {
  return "Загрузка..."
}

  return (
    <div className="container">
      <img src={dress.data.imageUrl} />
      <h2>{dress.data.title}</h2>
      <p>text</p>
      <h4>{dress.data.price} руб</h4>
    </div>
  );
}

export default FullDress;
