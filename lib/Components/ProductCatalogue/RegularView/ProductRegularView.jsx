import Image from "next/image";
import classes from "./ProductRegularView.module.css";
import { Prevent } from "../../Functions/Prevent";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import { useSelector, shallowEqual } from "react-redux";

export const ProductRegularView = (props) => {
  
  const dispatch = useDispatch();
  const SelectedMainOrder = useSelector((state) => state.mainOrder.mainOrder);
  const modelQuantityHandler = (event) => {
    const eventQuantity = "";
    if (!event.target.value.trim().length == 0) {
      eventQuantity = event.target.value;
    }
    dispatch(
      cartActions.changeModelQuantity({
        model,
        quantity: eventQuantity,
        order: SelectedMainOrder,
      })
    );
  };

  const modelQuantityCalcHandler = (event) => {
    if (event.key === "Enter") {
      const eventQuantity = 0;
      if (!event.target.value.trim().length == 0) {
        eventQuantity = event.target.value;
      }
      dispatch(
        cartActions.changeModelQuantityCalc({
          model,
          quantity: eventQuantity,
          order: SelectedMainOrder,
        })
      );
    }
  };

  const model = props.items.Modelname;

  const totalModelQuantity = useSelector(
    (state) => state["cart"][SelectedMainOrder]["totalQuantityModel"]
  ).find((item) => item.model === model);

  const test2 = "";

  if (totalModelQuantity) {
    test2 = totalModelQuantity.modelQuantity;
  }

  return (
    <div className={classes.product}>
      <div className={classes["product-detail"]}>
        <div>
          {" "}
          <Image
            src="/Images/4FORTY_AIR_MIPS.jpeg"
            width="50"
            height="50"
          />{" "}
        </div>
        <div className={classes["product-description"]}>
          {props.items.Shortdescription}
        </div>
        <div className={classes["product-NetPrice"]}>
          <div>{props.items.Netprice}</div>
        </div>
        <div className={classes["product-RetailPrice"]}>
          <div>{props.items.Recommendedretailprice}</div>
        </div>
        <div>
          <input
            className={classes["input"]}
            onClick={Prevent(() => console.log("Child Element!"))}
            value={test2}
            onChange={modelQuantityHandler}
            onKeyPress={modelQuantityCalcHandler}
            type="number"
            min="0"
          />
        </div>
      </div>
    </div>
  );
};
