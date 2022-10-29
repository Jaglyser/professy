import { Fragment } from "react";
import { ProductCatalogue } from "../ProductCatalogue/ProductCatalogue";
import classes from "./RightPane.module.css";
import { useSelector } from "react-redux";

export const RightPane = (props) => {

  const selectedView = useSelector((state) => state.pageView.pageViews);

  return (
    <div className={classes["split-plane-right-container"]}>
      <ProductCatalogue {...props} />
    </div>
  );
};
