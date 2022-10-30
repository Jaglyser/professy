import TestFilter from "../Filter/TestFilter";
import classes from "./LeftPane.module.css";

export const LeftPane = () => {
  return (
    <div className={classes["split-pane-top"]}>
      <TestFilter />
    </div>
  );
};
