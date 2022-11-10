import React from 'react';

const ChatList = props =>{
  return (
    <div>
      <img src={props.user.avatar} alt={props.user.name} width='50'/>
      <p>{props.user.username}</p>
    </div>
  );
};
export default ChatList;
