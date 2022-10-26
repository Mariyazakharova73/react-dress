import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const FullDress: React.FC = () => {
  const [dress, setDress] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>({ 
    imageUrl: '',
    title: '',
    price: 0 });
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchDress() {
      try {
        const {data} = await axios.get(
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

if (!dress) {
  return <>Загрузка...</>
}

  return (
    <div className="container">
      <img src={dress.imageUrl} alt={`${dress.title}.`}/>
      <h2>{dress.title}</h2>
      <p>text</p>
      <h4>{dress.price} руб</h4>
    </div>
  );
}

export default FullDress;
