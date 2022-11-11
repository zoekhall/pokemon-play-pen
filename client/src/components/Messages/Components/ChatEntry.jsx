import React from 'react';


const ChatEntry = ({user}) => (
  <div>
    chat Endtryalsk
    <img src={user.avatar} alt={user.name} width='50'/>
    <p>{user.username}</p>
  </div>
);


export default ChatEntry;
