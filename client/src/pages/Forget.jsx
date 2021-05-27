import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import {isAuth} from '../utils/helpers/auth';
import { Redirect } from 'react-router-dom';

export const Forget = () => {

  const [formData, setFormData] = useState({ email: '' });

  const { email } = formData;

  const handleChange = text => e => {
    setFormData({ ...formData, [text]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      const res = await axios.put(`${process.env.REACT_APP_API_URL}/password/forget`, { email });
      if (res) {
        setFormData({ ...formData, email: '' });
        toast.success('Проверте ваш email');
      } else {
        toast.error('Ошибка');
      }
    } else {
      toast.error('Заполните email');
    }
  }

  return <div>
    {isAuth() ? <Redirect to='/' /> : null}
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={email}
          onChange={handleChange('email')}
          placeholder='Введите email'
          type='email'
        />

        <button onClick={handleSubmit}>Восстановить пароль</button>
      </form>
      
    </div>
  </div>
}
