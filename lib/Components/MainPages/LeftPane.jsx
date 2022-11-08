import { FilterMenu } from "../FilterMenu/FilterMenu";
import classes from "./LeftPane.module.css";
import { useSelector } from "react-redux";
import { HandleOrders } from "../CurrentOrder/HandleOrders";

export const LeftPane = (props) => {
  const selectedView = useSelector((state) => state.pageView.pageViews);

  return (
    <div className={classes["split-pane-top"]}>
      {selectedView == "Catalogue" && <FilterMenu data={props.data} />}
      {selectedView == "Orders" && <HandleOrders />}
    </div>
  );
};
