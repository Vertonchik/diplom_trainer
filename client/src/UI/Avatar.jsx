import React from 'react';
import { colors } from './constants';

const Avatar = (props) => {

  const { size = 40, name = 'U' } = props;

  const styles = {
    width: size,
    height: size,
    color: colors.white,
    backgroundColor: colors.blue,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer'
  }

  return <div style={styles} {...props}>
    {name[0].toUpperCase()}
  </div>
}

export default Avatar;