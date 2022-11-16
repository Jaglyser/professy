import classes from "./SelectOrders.module.css";
import { useDispatch } from "react-redux";
import { selectedOrdersActions } from "../../store/selectedOrders";
import { useSelector } from "react-redux";
import { Prevent } from "../Functions/Prevent";
import { DatePicker } from "../General/DatePicker";
import { Fragment } from "react";
import ControlledCheckbox from "../General/ControlledCheckbox";


export const SelectOrder = (props) => {
  const dispatch = useDispatch();
  const value = props.value;
  const selectedOrder = useSelector(
    (state) => state.selectedOrders.selectedOrders
  );
  const category = props.category;
  const selectOrder = (event) => {
    dispatch(
      selectedOrdersActions.addFilter({
        value,
      })
    );
  };
  const removeOrder = (event) => {
    dispatch(
      selectedOrdersActions.removeFilter({
        value,
      })
    );
  };

  const isFound = selectedOrder.some((element) => {
    if (element["orders"] === props.value) {
      return true;
    }

    return false;
  });

  return (
    <Fragment>
      {!isFound && (
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
            <DatePicker />
          </th>
          <th className={classes.check}>
            <ControlledCheckbox order={props.value}/>
          </th>
        </tr>
      )}
      {isFound && (
        <tr className={classes["tr-selected"]} onClick={removeOrder}>
          <th>
            <h2>123123</h2>
          </th>
          <th>
            <h2>{props.value}</h2>
          </th>
          <th
            className={classes.th}
            onClick={Prevent(() => console.log("Child Element!"))}>
            <DatePicker />
          </th>
        </tr>
      )}
    </Fragment>
  );
};
