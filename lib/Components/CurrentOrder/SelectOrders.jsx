import classes from "./SelectOrders.module.css";
import { useDispatch } from "react-redux";
import { selectedOrdersActions } from "../../store/selectedOrders";
import { useSelector } from "react-redux";
import { Prevent } from "../Functions/Prevent";
import { DatePicker } from "../General/DatePicker";
import { Fragment } from "react";
import ControlledCheckbox from "../General/ControlledCheckbox";


export const SelectOrder = (props) => {

  return (
    <Fragment>
      <tr className={classes.tr}>
        <th>
          <h2>123123</h2>
        </th>
        <th>
          <h2>{props.value}</h2>
        </th>
        <th
          className={classes.th}
          onClick={Prevent(() => console.log("Child Element!"))}>
          <DatePicker order={props.value} />
        </th>
        <th className={classes.check}>
          <ControlledCheckbox order={props.value} />
        </th>
      </tr>
    </Fragment>
  );
};
