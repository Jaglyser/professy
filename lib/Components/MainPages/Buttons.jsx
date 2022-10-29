import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from './Buttons.module.css'
import { pageViewActions } from "../../store/pageView";

export const Buttons = (props) => {
  const selectedView = useSelector((state) => state.pageView.pageViews);
  const dispatch = useDispatch();

  const setPageView = (event) => {
    const updatedPageView = event.target.value;

    dispatch(
      pageViewActions.set({
        updatedPageView,
      })
    );
  };
  return (
    <Fragment>
      {selectedView == props.value && (
        <button
          className={classes["selected-button"]}
          value={props.value}
          onClick={setPageView}>
          {props.value}
        </button>
      )}
      {selectedView != props.value && (
        <button
          className={classes.button}
          value={props.value}
          onClick={setPageView}>
          {props.value}
        </button>
      )}
    </Fragment>
  );
};
