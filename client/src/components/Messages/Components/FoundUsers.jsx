import React from 'react';
import { Link, Route } from 'react-router-dom';

const FoundUsers = props => {


  return (
    <div>
      <img src={props.user.avatar} alt={props.user.name} width='100'/>
      <p>
        {props.user.firstName} {props.user.lastName}
      </p>
      <p>Username: {props.user.username}</p>
      <Link to={'/compose:' + props.user._id } >
        <button>Message</button>
      </Link>
    </div>
  );
};
export default FoundUsers;
