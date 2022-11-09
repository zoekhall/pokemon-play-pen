import React from 'react';

const FoundUsers = props => {
     

  return (
    <div>
      <img src={props.user.avatar} alt={props.user.name} width='100'/>
      <p>
        {props.user.firstName} {props.user.lastName}
      </p>
      <p>Username: {props.user.username}</p>
      <button>Message</button>
    </div>
  );
};
export default FoundUsers;
