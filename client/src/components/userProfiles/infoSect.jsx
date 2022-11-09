import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InfoSect = ({ id }) => {
  const [profile, setProfile] = useState({});


  const retriveIdData = () => {
    if (id === undefined) { // if no id from another is inputted
      axios.get('/api/user/current') // then just return YOU the current user data
        .then(data => { setProfile(data.data); console.log(data); })
        .catch(err => console.log(err, 'ERROR ON GET CURRENT USER'));
    } else {
      console.log('id inputted', id);
    }

  };

  const changeName = () => {
    axios.patch('/api/user/name')
      .then(data => { console.log(data, 'name change'); retriveIdData(); })
      .catch(err => console.log(err, 'name error'));
  };


  useEffect(retriveIdData, []);


  return (
    <div>
      <img alt={profile.firstName} width='100px' src={profile.avatar} referrerpolicy="no-referrer"/> <br/>
      Your Username: {profile.username} <br/>
      Your Description: <button>Edit</button><br/>
      A friend for testing: <br/>
      button:
      <button onClick={changeName}>update name</button>
    </div>
  );
};

export default InfoSect;
