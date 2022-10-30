import { Fragment } from "react";
import { ProductCatalogue } from "../ProductCatalogue/ProductCatalogue";
import classes from "./RightPane.module.css";
import { useSelector } from "react-redux";
import { CurrentOrder } from "../Order/CurrentOrder";

export const RightPane = (props) => {
  const selectedView = useSelector((state) => state.pageView.pageViews);

  return (
    <div className={classes["split-plane-right-container"]}>
      {selectedView == "Catalogue" && <ProductCatalogue {...props} />}
      {selectedView == "Orders" && <CurrentOrder />}
      {selectedView == "Start" && <ProductCatalogue {...props} />}
      {selectedView == "History" && <ProductCatalogue {...props} />}
    </div>
  );
};
