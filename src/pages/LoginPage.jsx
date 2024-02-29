import React from 'react'
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import './styles/loginPage.css';

const LoginPage = () => {
  const createToken = useAuth();

  const { handleSubmit, register, reset } = useForm();

  const submit = data => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login';
    createToken(url, data);
    reset({
      email: '',
      password: '',
    })

  }
  return (
    <div className='loginContainer'>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="user">Email: </label>
          <input {...register('email')} id='user' type="text" />
        </div>
        <div>
          <label htmlFor="key">Password: </label>
          <input {...register('password')} id='key' type="password" />
        </div>
        <button>Submit</button>
      </form>
      <p>If You Are Not Registered, Then You Can <span><Link to='/register'>Register Here</Link></span></p>
    </div>
  )
}

export default LoginPage;