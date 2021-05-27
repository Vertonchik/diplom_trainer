import React from 'react';
import { cnAuth, mapDispatchToProps } from './Auth.index';
import './Auth.scss';
import bg from 'assets/img/authbg.jpg';
import { AuthModal } from 'components';
import { Button } from 'UI';
import { connect } from 'react-redux';

const Component = ({changeAuthData}) => {

  return (
    <>
    <div className={cnAuth()}>
      <div className={cnAuth('Main')}>

        <div className={cnAuth('Main-Background')} style={{backgroundImage: `url(${bg})`}}></div>
        
        <div className={cnAuth('Main-Content')}>
          <div className={cnAuth('Main-Title')}>
            Изучи Oracle NOSQL <br/> с тренажёром
          </div>

          <Button onClick={e => changeAuthData({ open: true, type: 'register' })} className={cnAuth('Main-Button')} variant={'contained'}>
            Начать сейчас
          </Button>
        </div>
        
      </div>
    </div>

    <AuthModal />
    </>
  )
}

export const Auth = connect(undefined, mapDispatchToProps)(Component)
