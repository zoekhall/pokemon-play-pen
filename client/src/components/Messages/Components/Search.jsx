import React, {useState} from 'react';
import axios from 'axios';
import FoundUsers from './FoundUsers.jsx';


const Search = () => {
  const [searched, setUsers] = useState([]);


  const findUser = ()=>{
    axios.get('/api/user/find', {params: {name: 'tester'}})
      .then(data=> {
        console.log(data);
        setUsers(data.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
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
    </div>
  );
};



export default Search;
