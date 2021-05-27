import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import { colors } from './constants';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
    '& span': {
      color: '#000'
    }
  },
  item: {
    color: '#000'
  },
  label: {
    background: colors.white,
    padding: '0 6px',
  },
  input: {
    paddingTop: '10px',
    paddingBottom: '10px',
  }
}));


export default function MultipleSelect({
  items = [],
  value = [],
  onChange = () => {},
  label = '',
  multiple
}) {
  const classes = useStyles();

  const handleChange = (curValue) => {
    const isSame = value.includes(curValue);
    if (multiple) {
      let values = items.filter(item => value.includes(item.value))
      if (!isSame) values = [...values, items.find(item => item.value === curValue)];
      else if (isSame && value.length === 1) values = [];
      else {
        values = items.filter(item => item.value === curValue);
      }
      onChange(values);
    } else {
      if (isSame) onChange(undefined);
      else onChange(items.find(item => item.value === curValue))
    }
  };

  return (
      <FormControl variant="outlined" className={classes.root}>
        <InputLabel className={classes.label}>{label}</InputLabel>
        <Select
          variant="outlined"
          inputProps={{ className: value.length && classes.input }}
          multiple={multiple}
          value={multiple ? items.filter(item => value.includes(item.value)) : items.find(el => el.value === value)}
          renderValue={(selected) => {
            return (
              <div className={classes.chips}>
                {multiple ? selected.map((item) => (
                  <Chip variant="outlined" key={item.value} label={item.title} className={classes.chip} />
                )) : selected ? <Chip variant="outlined" label={selected.title} className={classes.chip} /> : null}
              </div>
            )
          }}
        >
          {items.map((item) => (
            <MenuItem className={classes.item} onClick={() => handleChange(item.value)} key={item.value} value={item.value} >
              {item.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
  );
}