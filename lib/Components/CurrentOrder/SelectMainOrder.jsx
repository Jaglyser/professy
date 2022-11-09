import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { MainOrderActions } from "../../store/mainOrder";
import { useSelector } from "react-redux";

export const SelectMainOrder = () => {
  const dispatch = useDispatch();

  const setMainOrderHandler = (event) => {
    const updatedMainOrder = event.target.value;

    dispatch(
      MainOrderActions.set({
        updatedMainOrder,
      })
    );
  };

  const mainOrder = useSelector((state) => state.mainOrder.mainOrder);

  const orders = Object.keys(useSelector((state) => state.cart));

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Order</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={mainOrder}
          label="Order"
          size="small"
          onChange={setMainOrderHandler}>
          {orders.map((item, i) => (
            <MenuItem key={i} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
