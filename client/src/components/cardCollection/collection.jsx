import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchForm from './searchForm.jsx';
import CardList from './cardList.jsx';

const Collection = () => {

  const [cards, setCards] = useState([]);

  return (
    <div>
      <SearchForm setCards={setCards} />
      <CardList cards={cards} />
    </div>
  );
};

export default Collection;
