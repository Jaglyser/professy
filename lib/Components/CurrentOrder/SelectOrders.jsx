import classes from "./SelectOrders.module.css";
import { useDispatch } from "react-redux";
import { selectedOrderActions } from "../../store/selectedOrders";
import { useSelector } from "react-redux";

export const SelectOrder = (props) => {
  const dispatch = useDispatch();
  const value = props.value;
  const selectedOrder = useSelector(
    (state) => state.selectedOrder.selectedOrders
  );
  const category = props.category;
  const selectOrder = (event) => {
    dispatch(
      selectedOrderActions.addFilter({
        value,
      })
    );
  };
  const removeOrder = (event) => {
    dispatch(
      selectedOrderActions.removeFilter({
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
    <div>
      {!isFound && (
        <div className={classes.button} onClick={selectOrder}>
          {props.value}
        </div>
      )}
      {isFound && (
        <div className={classes["selected-button"]} onClick={removeOrder}>
          {props.value}
        </div>
      )}
    </div>
  );
};
