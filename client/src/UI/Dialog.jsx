import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {Dialog, DialogContent, DialogTitle} from '@material-ui/core';

import closeImg from 'assets/img/close.svg';


const sizes = {
  'sm': 500
}

const useStyles = makeStyles({
  root:  props => ({
    position: 'relative',
    '& .MuiDialog-paperWidthSm': {
      maxWidth: sizes[props.size],
    }
    
  }),
  title: {
    height: '40px',
  },
  content: {
    padding: '0 45px 45px 45px',
    color: '#000'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  closeBtn: {
    width: 45,
    height: 45,
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    right: 0
  }
});

export default ({
  size = 'sm',
  open = false,
  title='',
  children,
  onClose = () => {},

}) => {
  const classes = useStyles({size});


  return <Dialog
    fullWidth={true}
    maxWidth={size}
    open={open}
    onClose={onClose}
    className={classes.root}
  >

    <DialogTitle className={classes.title}>
      {title}
      <img onClick={onClose} className={classes.closeBtn} src={closeImg} />
    </DialogTitle>

    <DialogContent className={classes.content}>
      {children}
    </DialogContent>

  </Dialog>

}