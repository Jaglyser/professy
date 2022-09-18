import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import ProductData from "../Products/ProductData";
import { ClassNames } from '@emotion/react';
import classes from './MultipleSelectChip.module.css'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};


function getStyles(item, categoryValue, theme) {
  return {
    fontWeight:
    categoryValue.indexOf(item) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip(props) {
let uniqueKeyArray = [...new Map(Object.values(ProductData).map((item) => [item[props.items], item])).values()]
const currentCategory = props.items;


  const theme = useTheme();
  const [categoryValue, setcategoryValue] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setcategoryValue(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div className={classes.dropdown}>
      <FormControl size="small" sx={{width: 200 }}>
        <InputLabel id="demo-multiple-chip-label">{props.items}</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={categoryValue}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label={props.items} />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {uniqueKeyArray.map((item, i) => (
            <MenuItem
              key={i}
              value={item[currentCategory]}
              style={getStyles(item[currentCategory], categoryValue, theme)}
            >
              {item[currentCategory]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}