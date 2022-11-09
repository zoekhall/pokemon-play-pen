import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SearchForm = ({ setCards }) => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleOnSubmit = async e => {
    e.preventDefault();

    setCards([]);

    try {
      const { data } = await axios.get('/api/deck', { params: { q: searchTerm } });
      // console.log('data', data);
      setCards(data);
      setSearchTerm('');
    } catch (err) {
      console.error(err);
    }
  };

  // this request is "just for show" - we could just have a blank page by default
  useEffect(() => {
    const getInitialCards = async () => {
      try {
        const { data } = await axios.get('https://api.pokemontcg.io/v2/cards?pageSize=50',
          {
            headers: {
              'api.pokemontcg.io-key': 'process.env.POKEMONTCG_API_KEY'
            }
          }
        );
        setCards(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    getInitialCards();
  }, []);

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button>
          Search Cards
        </button>
      </div>
    </form>
  );
};

export default SearchForm;



// useEffect(() => {
//   axios.get('/api/deck', { params: { q: 'Charizard' } })
//     .then(data => console.log(data));
// }, []);

