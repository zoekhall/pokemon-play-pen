import React, {useState} from 'react';
import axios from 'axios';
import FoundUsers from './FoundUsers.jsx';


const Search = () => {
  const [searched, setUsers] = useState([]);
  const [user, setSearch] = useState('');


  const findUser = ()=>{
    axios.get('/api/user/find', {params: {name: user}})
      .then(users => setUsers(users.data))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <p>Search Users:</p>
      <input onChange={e=>{
        setSearch(e.target.value);
        findUser();
      }} type="text" />
      {searched.map(user => (
        <FoundUsers
          user={user}
          key={user._id}
        />))}
    </div>
  );
};



export default Search;
