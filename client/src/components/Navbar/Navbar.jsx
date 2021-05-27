import React from 'react';
import { cnNavbar, mapStateToProps, mapDispatchToProps, navItems } from './Navbar.index';
import './Navbar.scss';
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { HideOnScroll } from '../hocs/HideOnScrollNavbar';
import logo from 'assets/img/logo.png';
import { colors, Button, Avatar, Popover } from 'UI';
import { connect } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: colors.black,
    color: colors.white,
    height: 70
  },
  nav: {
    width: '100%',
    maxWidth: '1350px',
    margin: '0 auto',
    display: 'flex',
    'justifyContent': 'space-between',
    height: 70,
  }
}));

const Component = ({
  changeAuthData,
  isAuth,
  user,
  logout
}) => {

  const history = useHistory();
  const classes = useStyles();

  return (
    //hide={isAuth}
    <HideOnScroll>
      <AppBar className={classes.root} position="fixed">
        <Toolbar className={classes.nav}>
          <div className={cnNavbar('Left')}>
            <NavLink to={'/'}>
              <img className={cnNavbar('Logo')} src={logo} />
            </NavLink>

            {isAuth && <div className={cnNavbar('Nav')}>
              {navItems.map(nav => <NavLink activeClassName={cnNavbar('Nav-Item', ['active'])} className={cnNavbar('Nav-Item')} to={nav.to}>{nav.title}</NavLink>)}
            </div>}
          </div>

          <div className={cnNavbar('Right')}>
            {isAuth ? <div className={cnNavbar('Actions')}>

              <div className={cnNavbar('Search')}>

              </div>

              <Popover>
                <Avatar name={user?.name} />
                <div className={cnNavbar('Popup')}>
                  <Button onClick={() => logout()}>Выйти</Button>

                  {!!user?.isAdmin && <Button onClick={() => history.push('/admin')}>Админка</Button>}
                </div>
              </Popover>

            </div> :
              <div className={cnNavbar('LoginBlock')}>
                <Button className={cnNavbar('Login')} variant='contained' onClick={() => changeAuthData({ open: true })}>
                  ВОЙТИ
                </Button>
              </div>}
          </div>

        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}

export const Navbar = connect(mapStateToProps, mapDispatchToProps)(Component);
