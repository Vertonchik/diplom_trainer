import React, { useEffect } from 'react';
import { cnAuthModal, mapStateToProps, mapDispatchToProps } from './AuthModal.index';
import { connect } from 'react-redux';
import { Dialog } from 'UI';
import './AuthModal.scss';

import { Login } from '../Login/Login';
import { Register } from '../Register/Register';

const AuthModalP = ({
  type,
  open,
  changeAuthData,
  clearAuthData
}) => {

  useEffect(() => {
    let timeout
    if(!open) {
      timeout = setTimeout(() => clearAuthData(), 500);
    }
    return () => {
      clearTimeout(timeout);
    }
  }, [open])

  const toggler = {
    'login': <Login />,
    'register': <Register />,
  }

  return <Dialog open={open} onClose={() => changeAuthData({open: false})}>
    {toggler[type]}
  </Dialog>
}

export const AuthModal = connect(mapStateToProps, mapDispatchToProps)(AuthModalP);