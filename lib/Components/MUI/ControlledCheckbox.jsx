import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

export default function ControlledCheckbox(props) {
  const order = props.order;

  const dispatch = useDispatch();

  const selectedOrder = useSelector((state) => state["cart"][order]["selected"]);

  const selectOrder = (event) => {
    dispatch(
      cartActions.selectOrder({
        order,
      })
    );
  };

  return (
    <Checkbox
      checked={selectedOrder}
      onChange={selectOrder}
      inputProps={{ "aria-label": "controlled" }}
      sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
    />
  );
}
