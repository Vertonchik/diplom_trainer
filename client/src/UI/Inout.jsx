import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { colors } from './constants';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    borderRadius: 6,
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: colors.blue
      }
    },
    '& .MuiInputLabel-root': {
      "&.Mui-focused": {
        color: colors.blue
      }
    }
  }
}));

export default ({
  value,
  label,
  error,
  onChange,
  className = '',
  type='text',
  multiline
}) => {
  const classes = useStyles();

  return <TextField
    value={value}
    label={label}
    error={!!error}
    helperText={error}
    variant="outlined"
    helper
    onChange={e => onChange(e.target.value)}
    className={`${classes.root} ${className}`}
    type={type}
    multiline
  />
}