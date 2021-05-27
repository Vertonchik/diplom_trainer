import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import jwt from 'jsonwebtoken';
// import { authenticate, isAuth } from '../utils/helpers/auth';
import { Link, Redirect, useParams } from 'react-router-dom';

export const Reset = () => {

  const { token } = useParams();

  const [formData, setFormData] = useState({
    password1: '',
    password2: '',
    token
  })

  const { password1, password2 } = formData;

  // useEffect(() => {
  //   if (token) {

  //     setFormData({ ...formData, name, token })
  //   }
  // }, [])

  const handleChange = text => e => {
    setFormData({ ...formData, [text]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ((password1 === password2) && password1 && password2) {
      const res = await axios.put(`${process.env.REACT_APP_API_URL}/password/reset`, { 
        token, 
        newPassword: password1,
        resetPasswordLink: token 
      });
      if (res) {
        setFormData({ ...formData, password1: '', password2: '' });
        toast.success(res.data.message);
      } else {
        toast.error('Ошибка');
      }
    }
  }

  return <div>
    {/* {isAuth() ? <Redirect to='/' /> : null} */}
    <div>
      <h1>Reset password</h1>

      <form onSubmit={handleSubmit}>
      <input
            type='password'
            placeholder='Введите пароль'
            onChange={handleChange('password1')}
            value={password1}
          />

          <input
            type='password'
            placeholder='Повторите пароль'
            onChange={handleChange('password2')}
            value={password2}
          />

          <button type='submit'>Изменить пароль</button>
      </form>
    </div>
  </div>
}

