import React, { useEffect } from 'react';
import axios from 'axios';

const SearchForm = ( { setCards } ) => {

  // useEffect(() => {
  //   axios.get('/api/deck', { params: { q: 'Charizard' } })
  //     .then(data => console.log(data));
  // }, []);

  useEffect(() => {
    const getInitialCards = async () => {
      try {
        const { data } = await axios.get('https://api.pokemontcg.io/v2/cards?pageSize=50');
        setCards(data.data);
      } catch (error) {
        console.error(err);
      }
    };
    getInitialCards();
  }, []);

  return (
    <div>
      <h3>SearchForm</h3>
    </div>
  );
};

export default SearchForm;