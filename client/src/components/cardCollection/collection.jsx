import React, { useEffect } from 'react';
import axios from 'axios';


const Collection = () => {

  useEffect(() => {
    axios.get('/api/deck', { params: { q: 'Charizard' } });
    // .then(data => console.log(data));
  }, []);

  return (
    <div>
      CARDCOLLECTION!!!
    </div>
  );
};

export default Collection;