// needed React things
import React from 'react';
import axios from 'axios';
// Components


const Inbox = () => {

  const searchUsers = () =>{
    axios.get('/api/user/findUser', {params: { name: 'tester'}})
      .then(data => console.log(data));
  };


  const test = () =>{
    console.log('Front hit!!!');
    axios.get('/api/user', {params: { name: 'tester'}})
      .then(data => console.log(data));
  };

  return (
    <div>
      <form>
        <input type="text" />
        <button onClick={ searchUsers }>SEARCH</button>
      </form>
      <button onClick={test}>test</button>
    </div>
  );

};

export default Inbox;
