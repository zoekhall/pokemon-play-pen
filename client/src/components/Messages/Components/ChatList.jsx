import React from 'react';


const ChatList = ({user}) =>{


  return (
    <div>
      Test
      <img src={user.avatar} alt={user.name} width='50'/>
      <p>{user.username}</p>

    </div>
  );
};

export default ChatList;
