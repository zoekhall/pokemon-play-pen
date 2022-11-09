import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

/** CURRENT ISSUE
 * Profile data only rendering after making an edit
 * text inputted into edit dosent get sent to the function to edit it in the db
 */

const InfoSect = ({ id }) => {
  const [profile, setProfile] = useState({});
  const [inputVals, setInputVals] = useState({});
  const [textDescription, setDescription] = useState(inputVals.description);
  const [textUsername, setUsername] = useState(inputVals.username);

  const retriveIdData = () => {
    // if no id from another is inputted
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

  const handleClick = () => {
    if (userRef.current.value.length !== 0) {
      changeUsername(userRef.current.value);
    } else { console.log('user ref is short'); }

    if (descRef.current.value.length !== 0) {
      changeDescription(descRef.current.value);
    } else { console.log('desc ref is shooort'); }
  };

  useEffect(() => {
    retriveIdData();
  }, []);


  // changeName(inputVals.username);
  // changeDescription(inputVals.description);

  const userRef = useRef(null);
  const descRef = useRef(null);
  return (
    <div>
      <img alt={profile.firstName} width='100px' src={profile.avatar} referrerpolicy="no-referrer" /> <br />
      <button onClick={() => setInputVals(() => ({ clicked: true }))}>Edit Profile</button> <br />

      Your Username:  {inputVals.clicked ?
        <div><input value={textUsername} ref={userRef}/> </div> :
        <div>{profile.username}</div>} <br />

      Your Description: {inputVals.clicked ?
        <div><input value={textDescription} ref={descRef}/></div> :
        <div>{profile.description}</div>}

      {inputVals.clicked ?
        <div><button onClick={() => {
          handleClick();
          setInputVals(() => ({ clicked: false }));
        }}>Post</button></div> : <div></div>}

    </div>
  );
};

export default InfoSect;
