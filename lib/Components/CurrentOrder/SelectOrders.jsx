import classes from "./SelectOrders.module.css";
import { DatePicker } from "../MUI/DatePicker";
import { Fragment } from "react";
import ControlledCheckbox from "../MUI/ControlledCheckbox";
import { useSelector } from "react-redux";

export const SelectOrder = (props) => {
const orderInfo = useSelector((state) => state.cart[props.orderNr])


  return (
    <Fragment>
      <tr className={classes.tr}>
        <th>
          <h2>{props.orderNr}</h2>
        </th>
        <th>
          <h2>{orderInfo.name}</h2>
        </th>
        <th className={classes.th}>
          <DatePicker order={props.orderNr} />
        </th>
        <th className={classes.check}>
          <ControlledCheckbox order={props.orderNr} />
        </th>
      </tr>
    </Fragment>
  );
};
