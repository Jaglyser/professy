import { FilterMenu } from "../FilterMenu/FilterMenu";
import classes from "./LeftPane.module.css";

export const LeftPane = (props) => {
  return (
    <div className={classes["split-pane-top"]}>
      <FilterMenu data={props.data}/>
    </div>
  );
};
