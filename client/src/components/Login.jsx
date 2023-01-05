import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function Login() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="login-box">
      <input type='text' />
      <input type='password' />
      <button type='submit'>Log in</button>
    </div>
  );
}