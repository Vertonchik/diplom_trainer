import React from 'react';
import { cnLogin, mapStateToProps, mapDispatchToProps } from './Login.index';
import './Login.scss';
import { connect } from 'react-redux';
import { Input, Button } from 'UI';

const Component = ({
  data,
  changeAuthData,
  login
}) => { 

  return <div className={cnLogin()}>
    <div className={cnLogin('Title')}>
      Войти
    </div>

    <form className={cnLogin('MainForm')}>
      <Input
        value={data.email}
        onChange={email => changeAuthData({email})}
        label={'Адрес электронной почты'}
      />

      <Input
        value={data.password}
        onChange={password => changeAuthData({password})}
        label={'Пароль'}
        type='password'
      />

      <Button variant='contained' onClick={() => login()}>
        Войти
      </Button>
    </form>

    <div className={cnLogin('Additional')}>
      <Button variant='link' onClick={() => changeAuthData({ type: 'register' })}>
        Зарегистрироваться
      </Button>
    </div>

  </div>
}

export const Login = connect(mapStateToProps, mapDispatchToProps)(Component);