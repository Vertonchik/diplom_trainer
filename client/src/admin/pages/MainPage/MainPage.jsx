import React from 'react';
import { classname } from './MainPage.index';
import { Button } from 'UI';
import { NavLink } from 'react-router-dom';
import './MainPage.scss';

export const MainPage = () => {

  return (
    <div className={classname()}>
      <NavLink to='/admin/tests'>
        <Button  variant='contained'>Фильмы</Button>
      </NavLink>
      

    </div>
  )
}