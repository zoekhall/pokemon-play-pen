import React, {useState} from 'react';
import { useLocation, Link} from 'react-router-dom';
import axios from 'axios';

const Compose = props => {
  const [message, setText] = useState('');
  //getting user Id from endpoint and parsing it
  const id = Number(useLocation().pathname.split(':')[1]);



  const setMsg = () => {
    if (message.length > 5 ) {
      axios.post('/api/chat', {
        text: message,
        to: id,
      })
        .catch(err=>console.log(err));
    }
  };

  return (
    <div>
      <h2>
        Compose
      </h2>
      <input onChange={e=>setText(e.target.value)}type='text' width='200px'/>
      <Link to={'/inbox'} >
        <button onClick={setMsg}>Send</button>
      </Link>
    </div>
  );
};

export default Compose;
