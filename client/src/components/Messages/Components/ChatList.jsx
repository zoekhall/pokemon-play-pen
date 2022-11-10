import React from 'react';
import ChatEntry from './ChatEntry.jsx';

const ChatList = props =>{
  return (
    <div>
      check
      {props.users.map(user=>(
        <ChatEntry
          user={user}
          key={user._id}
        />
      ))}
    </div>
  );
};
export default ChatList;
