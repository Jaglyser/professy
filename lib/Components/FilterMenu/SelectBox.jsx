import classes from "./SelectBox.module.css";
import { useDispatch } from "react-redux";
import { filtersActions } from "../../store/filters";
import { useSelector } from "react-redux";
export const SelectBox = (props) => {
  const dispatch = useDispatch();
  const value = props.value
  const filterValue = useSelector((state) => state.filters.filters);
  const category = props.category
  const setFilter = (event) => {
    dispatch(
      filtersActions.addFilter({
        category, value,
      })
    );
  };
  const removeFilter = (event) => {
    dispatch(
      filtersActions.removeFilter({
        category, value,
      })
    );
  };


  const isFound = filterValue.some((element) => {
    if (element[category] === props.value) {
      return true;
    }

    return false;
  });

  return (
    <div>
      {!isFound && (
        <div className={classes.button} onClick={setFilter}>
          {props.value}
        </div>
      )}
      {isFound && (
        <div className={classes["selected-button"]} onClick={removeFilter}>
          {props.value}
        </div>
      )}
    </div>
  );
};
