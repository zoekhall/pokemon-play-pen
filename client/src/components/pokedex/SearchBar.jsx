import React, {useState} from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState(''); //state to hold search term inputted
  const [results, setResults] = useState([]); //state to hold search results


  return (
    <div>
      <input type="text" />
    </div>
  );


};

export default SearchBar;