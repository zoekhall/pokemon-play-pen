import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

/** CURRENT ISSUE
 * Profile data only rendering after making an edit
 * text inputted into edit dosent get sent to the function to edit it in the db
 */

const InfoSect = () => {
  const [profile, setProfile] = useState({});
  const [inputVals, setInputVals] = useState({});

  const retriveIdData = () => { // get the profile object data from db
    axios.get('/api/user/current') // then just return YOU the current user data
      .then(data => {
        setProfile(data.data); // give the profile state the profile object from google auth
        setInputVals({ // set the text on the page to the profile objects username and desc values
          description: profile.description,
          username: profile.username,
          clicked: false
        });
      })
      .catch(err => console.log(err, 'ERROR ON GET CURRENT USER'));
  };

  const changeUsername = (newName) => { // the inputted name will be sent to the database to be edited
    axios.patch('/api/user/name', { name: newName })
      .then(data => { retriveIdData(); })
      .catch(err => console.log(err, 'name error'));
  };

  const changeDescription = (newDescription) => { // the inputted descrpition will be sent to the database to be edited
    axios.patch('api/user/description', { data: newDescription })
      .then(data => { retriveIdData(); })
      .catch(err => console.log(err, 'description err'));
  };

  const handleClick = () => { // update the username and description witht he incomming user input
    if (userRef.current.value.length !== 0) { // if the text field is not empty change the username
      changeUsername(userRef.current.value);
    }

    if (descRef.current.value.length !== 0) {
      changeDescription(descRef.current.value); // if the description field is not empty change the description
    }
  };

  useEffect(retriveIdData, []);


  const userRef = useRef(null); // the refrence for the username edit text 
  const descRef = useRef(null); // the refrence for the description edit text
  return (
    <div>
      <img alt={profile.firstName} width='100px' src={profile.avatar} referrerpolicy="no-referrer" /> <br />

      <button onClick={() => setInputVals(() => ({ clicked: true }))}>Edit Profile</button> <br />

      Your Username:  {inputVals.clicked ?
        <div><input ref={userRef} /> </div> :
        <div>{profile.username}</div>} <br />

      Your Description: {inputVals.clicked ?
        <div><input ref={descRef} /></div> :
        <div>{profile.description}</div>} <br />

      Your Favorite Pokemon:
      <div>
        <img src={profile.favPokemonImage} alt={profile.favPokemonName} width='90px' referrerpolicy='no-referrer' /> <br />
        <h2>
          {profile.favPokemonName}
        </h2>  <br />
        <ul>
          <li>{profile.favPokemonType1}</li>
          {profile.favPokemonType2 ? <li>{profile.favPokemonType2}</li> : <></>}
        </ul>
      </div>


      {inputVals.clicked ?
        <div><button onClick={() => {
          handleClick();
          setInputVals(() => ({ clicked: false }));
          retriveIdData();
        }}>Post</button></div> : <div></div>}

    </div>
  );
};

export default InfoSect;
