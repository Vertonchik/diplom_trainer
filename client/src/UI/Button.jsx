import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {colors} from './constants';

const buttonTypes = {
  'contained': {
    backgroundColor: colors.blue,
    '& .MuiButton-label': {
      color: colors.white,
    }
  },
  'outlined': {
    backgroundColor: colors.black,
    borderColor: colors.blue,
    '& .MuiButton-label': {
      color: colors.white,
    }
  },
  'link':{
    backgroundColor: 'none',
    padding: 0,
    '&:hover': {
      background: 'none',
    }
  }
}


const useStyles = makeStyles({
  root: props => ({
    textTransform: 'none',
    padding: '6px 20px',
    fontSize: '16px',
    borderRadius: 6,
    '& .MuiButton-label': {
      color: props.variant === 'link' && props.color,
      fontSize: 16,
      '&:hover': {
        color: props.variant === 'link' && colors.blue,
      }
    },
    '&:hover': {
      ...buttonTypes[props.variant]
    },
    ...buttonTypes[props.variant],
  }),
});

/**
 * @param variant - contained | outlined, default - contained
 * @param onClick - (e) => void
 * @param className - string
 */
const CustomButton = ({
  children,
  variant,
  onClick,
  className,
  href,
  color='#000'
}) => {

  const styles = useStyles({variant: variant || 'link', color})

  const handleClick = e => {
    onClick && onClick(e);
  }

  return <Button
    href={href}
    variant={variant}
    onClick={handleClick}
    className={`${styles.root} ${className}`}
  >{children}</Button>
}

export default CustomButton;