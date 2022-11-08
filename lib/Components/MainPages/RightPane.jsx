import { Fragment } from "react";
import { ProductCatalogue } from "../ProductCatalogue/ProductCatalogue";
import classes from "./RightPane.module.css";
import { useSelector } from "react-redux";
import { CurrentOrder } from "../CurrentOrder/CurrentOrder";

export const RightPane = (props) => {
  const selectedView = useSelector((state) => state.pageView.pageViews);
  const filterValues = useSelector((state) => state.filters.filters);
  const data = props.data;

  const filter = filterValues.map((item) => item.Category);
  const res = data.filter((item) => filter.includes(item.Category));

  return (
    <div className={classes["split-plane-right-container"]}>
      {selectedView == "Catalogue" && <ProductCatalogue data={res} />}
      {selectedView == "Orders" && <CurrentOrder />}
      {selectedView == "History" && <div />}
    </div>
  );
};
