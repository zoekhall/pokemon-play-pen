import React, {useState} from 'react';
import axios from 'axios';
import FoundUsers from './FoundUsers.jsx';


const Search = () => {
  const [searched, setUsers] = useState([]);
  const [user, setSearch] = useState('');


  const findUser = ()=>{
    axios.get('/api/user/find', {params: {name: user}})
      .then(data=> {
        //console.log(data);
        setUsers(data.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      Search Users
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
