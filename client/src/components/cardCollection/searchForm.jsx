import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SearchForm = ({ setCards }) => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleOnSubmit = async e => {
    e.preventDefault();

    setCards([]);

    try {
      const { data } = await axios.get('/api/deck', { params: { q: searchTerm } });
      setCards(data);
      setSearchTerm('');
    } catch (err) {
      console.error(err);
    }
  };


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
