import { Fragment } from "react";
import { ProductCatalogue } from "../ProductCatalogue/ProductCatalogue";
import classes from "./RightPane.module.css";

export const RightPane = (props) => {
  return (
    <div className={classes["split-plane-right-container"]}>
      <ProductCatalogue {...props} />
    </div>
  );
};
