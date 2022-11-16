import * as React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

export const DatePicker = (props) => {

  const order = props.order;

  const dispatch = useDispatch();

  const deliveryDate = useSelector(
    (state) => state["cart"][order]["deliveryDate"]
  );

    const selectDeliveryDate = (newValue) => {
      dispatch(
        cartActions.selectDeliveryDate({
          order,
          deliveryDate: newValue,
        })
      );
    };


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label="For desktop"
          size="small"
          value={dayjs(deliveryDate)}
          minDate={dayjs("2022-04-07")}
          onChange={(newValue) => {
            selectDeliveryDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}
