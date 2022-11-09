import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Compose = props => {
  //getting user Id from endpoint and parsing it
  const [message, setText] = useState('');
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
      <button onClick={setMsg}>Send</button>
    </div>
  );
};

export default Compose;
