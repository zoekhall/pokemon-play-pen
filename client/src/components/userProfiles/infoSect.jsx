import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InfoSect = ({ id }) => {
  const [profile, setProfile] = useState({});
  const [inputVals, setInputVals] = useState({
    description: profile.description,
    username: profile.username,
    clicked: false
  });

  const retriveIdData = () => {
    if (id === undefined) { // if no id from another is inputted
      axios.get('/api/user/current') // then just return YOU the current user data
        .then(data => { setProfile(data.data); console.log(data); })
        .catch(err => console.log(err, 'ERROR ON GET CURRENT USER'));
    } else {
      console.log('id inputted', id);
    }

  };

  const changeName = (newName) => {
    axios.patch('/api/user/name', { name: newName})
      .then(data => { retriveIdData(); })
      .catch(err => console.log(err, 'name error'));
  };

  const editDescription = (newDescription) => {
    axios.patch('api/user/description', { data: newDescription })
      .then(data => { retriveIdData(); })
      .catch(err => console.log(err, 'description err'));
  };


  useEffect(retriveIdData, []);


  return (
    <div>
      <img alt={profile.firstName} width='100px' src={profile.avatar} referrerpolicy="no-referrer" /> <br />
      Your Username: {profile.username} <br />
      Your Description: {profile.description}<button onClick={() => editDescription('Iam the one born on a bolder 30 years ago on mount fugi')}>Edit</button><br />
      A friend for testing: <br />
      { inputVals.clicked ? 
        <div><input value={inputVals.username} onChang/> <button onClick={() => { changeName(inputVals.username); setInputVals(() => ({clicked: false})); }}>Post</button></div> : 
        <button onClick={() => setInputVals(() => ({clicked: true})) }>edit Username</button>}
    </div>
  );
};

export default InfoSect;
