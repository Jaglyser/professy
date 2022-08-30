import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ProductData from "../Products/ProductData";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
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

export default function MultipleSelect(props) {
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
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">{props.items}</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={categoryValue}
          onChange={handleChange}
          input={<OutlinedInput label={props.items} />}
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