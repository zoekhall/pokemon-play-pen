import React, {useState} from 'react';
import axios from 'axios';
import FoundUsers from './FoundUsers.js';


const Search = () => {
  const [searched, setUsers] = useState([]);


  const findUser = ()=>{
    axios.get('/api/user/findUser', {params: {name: 'tester'}})
      .then(data=> {
        //console.log(data.data);
        setUsers(data.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <input type="text" />
      <button onClick={findUser}>SEARCH</button>
      {searched.map(
        user => (
          <FoundUsers
            user={user}
            key={user._id}
          />
        )
      )}
    </>
  );
};



export default Search;
