import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {

    //Si lastPath es nulo se manda a la pagina de inicio

    const lastPath = localStorage.getItem('lastPath') || '/'

    login('sofia');

    navigate(lastPath , {
      replace: true,
    });
  };

  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr />

      <button className='btn btn-primary'
        onClick={onLogin}>
        Login
      </button>
    </div>
  );
};