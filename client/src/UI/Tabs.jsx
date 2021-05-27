import React from 'react';
import Tab from '@material-ui/core/Tab';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { fontSizes, colors } from './constants';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  item: props => ({
    fontSize: fontSizes[props.size],
    color: colors.white,
    cursor: 'pointer',
    padding: '3px 0',
    marginRight: '20px'
  }),
  active: {
    borderBottom: `2px solid ${colors.blue}`
  }

}));

export default ({ value, onChange, items, size='m' }) => {

  const classes = useStyles({size})

  return (
    <div className={classes.root}>
      {items.map(item => (
        <div className={`${classes.item} ${item.value === value && classes.active}`} onClick={() => onChange(item.value)}>{item.title}</div>
      ))}
    </div>
  )
}