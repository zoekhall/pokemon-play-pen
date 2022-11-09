import React from 'react';
import { useLocation } from 'react-router-dom';

const Compose = props => {
  //getting user Id from endpoint and parsing it
  const id = Number(useLocation().pathname.split(':')[1]);

  return (
    <div>
     Compose
    </div>
  );
};

export default Compose;
