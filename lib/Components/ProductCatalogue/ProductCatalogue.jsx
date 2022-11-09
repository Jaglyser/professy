import { Fragment } from "react";
import ProductData from "../../data/ProductData";
import { useState } from "react";
import classes from "./ProductCatalogue.module.css";
import TextField from "@mui/material/TextField";
import ProductList from "./ProductList";
import { SelectMainOrder } from "../CurrentOrder/SelectMainOrder";

export const ProductCatalogue = (props) => {
  
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = props.data.filter((val) => {
    if (searchTerm == "") {
      return val;
    } else if (
      val.Shortdescription.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return val;
    }
  });

  const numberOfItems = Object.keys(filtered).length;

  return (
    <Fragment>
      <div className={classes["split-plane-right-heading"]}>
        <div className={classes.numberOfProductsInSelection}>
          {numberOfItems} items
        </div>
        <div className={classes.search}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Search"
            size="small"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <div className={classes.search}>
          <SelectMainOrder />
        </div>
        <div>Net price</div>
        <div>Retail price</div>
        <div>Quantity</div>
      </div>
      <div className={classes["split-plane-right-rows"]}>
        <ProductList {...filtered} />
      </div>
    </Fragment>
  );
};
