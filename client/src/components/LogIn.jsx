import React from 'react';

//name attribute should align with schema?? 


const Signup = () => {
  return (
    <div>
      <form >
        <h1>Prepare Your Play Pen!</h1>
        <p>Please fill in this form to create an account</p>
        <label>
          <span>Username:</span>
          <input type="text" name="username" required/>
        </label>
        <label>
          <span>Password:</span>
          <input type="password" name="password" required/>
        </label>
        <label>
          <span>Favorite Pokemon:</span>
          <input type="text" name="favPokemon" required/>
        </label>
      </form>
    </div>
  );
};






const Login = () => {
  return (
    <div>
      <img src="logo"></img>
    </div>
  );
};