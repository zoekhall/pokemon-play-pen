import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InfoSect = () => {
  const [profile, profileChange] = useState({});
  
  useEffect(() => {
    axios.get('/api/current/user')
      .then(data => console.log(data, 'USE EFFEC'))
      .catch(err => console.log(err, 'ERROR ON GET CURRENT USER'));
  });

  return (
    <div>
      Your Picture:
      Your Username:
      Your Description:
    </div>
  );
};

export default InfoSect; 