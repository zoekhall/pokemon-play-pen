import React from 'react';


const ChatEntry = props => {
  return (
    <div>
     check
      <img src={props.user.avatar} alt={props.user.name} width='50'/>
      <p>{props.user.username}</p>
    </div>
  );
};
export default ChatEntry;
