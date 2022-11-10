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

  // the request below is "just for show" - we could just have a blank page by default
  // but instead we are starting the user off on the search page with the first 50 cards
  useEffect(() => {
    const getInitialCards = async () => {
      try {
        const { data } = await axios.get('/api/deck/firstFiftyCards');
        setCards(data);
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

