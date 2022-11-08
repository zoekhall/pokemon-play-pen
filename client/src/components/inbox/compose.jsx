import axios from 'axios';
import React from 'react';


const Compose = () => {
// func to search for users to message
  const searchUsers = () =>{
    axios.get('/api/user/findUser', {params: { name: 'tester'}})
      .then(data => console.log(data));
  };
  return (
    <div>
      <form>
        <input type="text" />
        <button onClick={searchUsers}>SEARCH</button>
      </form>

    </div>
  );
};
export default Compose;
