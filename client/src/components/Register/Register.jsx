import React from 'react';
import { cnRegister, mapStateToProps, mapDispatchToProps } from './Register.index';
import './Register.scss';
import { connect } from 'react-redux';
import { Input, Button } from 'UI';

const Component = ({
  data,
  changeAuthData,
  registration
}) => { 

  return <div className={cnRegister()}>
    <div className={cnRegister('Title')}>
      Регистрация
    </div>

    <form className={cnRegister('MainForm')}>

    <Input
        value={data.name}
        onChange={name => changeAuthData({name})}
        label={'Имя'}
      />

      <Input
        value={data.email}
        onChange={email => changeAuthData({email})}
        label={'Адрес электронной почты'}
      />

      <Input
        value={data.password1}
        onChange={password1 => changeAuthData({password1})}
        label={'Пароль'}
        type='password'
      />

      <Input
        value={data.password2}
        onChange={password2 => changeAuthData({password2})}
        label={'Повторите пароль'}
        type='password'
      />

      <Button variant='contained' onClick={() => registration()}>
        Зарегистрироваться
      </Button>
    </form>

    <div className={cnRegister('Additional')}>
      <Button variant='link' onClick={() => changeAuthData({ type: 'login' })}>
        Войти
      </Button>
    </div>

  </div>
}

export const Register = connect(mapStateToProps, mapDispatchToProps)(Component);