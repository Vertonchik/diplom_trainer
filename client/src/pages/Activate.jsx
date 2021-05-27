import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { authenticate, isAuth } from '../utils/helpers/auth';
import { Link, Redirect, useParams } from 'react-router-dom';

export const Activate = () => {

  const { token } = useParams(); 

  const [formData, setFormData] = useState({
    name: '',
    token: '',
    show: true
  })

  useEffect(() => {
    if (token) {
      let name = jwt.decode(token);
      setFormData({ ...formData, name, token })
    }
  }, [])

  const handleSubmit = async(e) => {
    e.preventDefault();
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/activation`, {token});
    if (res) {
      setFormData({ ...formData, show: false });
      toast.success(res.data.message);
    } else {
      toast.error('Ошибка');
    }
  }

  return <div>
    {isAuth() ? <Redirect to='/' /> : null}
    <div>
      <button onClick={handleSubmit}>Activate</button>
    </div>
  </div>
} 

