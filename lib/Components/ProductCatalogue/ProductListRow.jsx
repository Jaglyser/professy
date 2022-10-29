import React, { useState } from "react";
import { ExpandedViewModel } from "./ExpandedView/ExpandedViewModel";
import { ProductRegularView } from "./RegularView/ProductRegularView";
import classes from "./ProductListRow.module.css";

const ProductListRow = (props) => {
  const [fullProductView, setFullProductView] = useState(false);

  const startEditingHandler = () => {
    if (!fullProductView) {
      setFullProductView(true);
    } else {
      setFullProductView(false);
    }
  };

  return (
    <div className={classes.product} onClick={startEditingHandler}>
      {!fullProductView && <ProductRegularView {...props} />}
      {fullProductView && (
        <div>
          <ProductRegularView {...props} />
          <ExpandedViewModel {...props} />
        </div>
      )}
    </div>
  );
};

export default ProductListRow;
