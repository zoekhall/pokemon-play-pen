import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InfoSect = ({ id }) => {
  const [profile, setProfile] = useState({});

  const retriveIdData = () => {
    if (id === undefined) { // if no id from another is inputted
      axios.get('/api/user/current') // then just return YOU the current user data
        .then(data => { setProfile(data.data); console.log(data.data); })
        .catch(err => console.log(err, 'ERROR ON GET CURRENT USER'));
    }

  };

  useEffect(retriveIdData, []);


  return (
    <div>
      Your Username: {profile.username}
      Your Description: 
    </div>
  );
};

export default InfoSect; 