import classes from "./ListRowSmall.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import { useSelector, shallowEqual } from "react-redux";

export const ListRowSmall = (props) => {
  const dispatch = useDispatch();

  const setCartHandler = (event) => {
    const eventQuantity = 0;
    if (!event.target.value.trim().length == 0) {
      eventQuantity = event.target.value;
    }

    dispatch(
      cartActions.setItemAmount({
        id,
        title,
        price,
        model,
        quantity: eventQuantity,
      })
    );
  };
  const id = props.itemid;
  const title = props.color;
  const price = 100;
  const model = props.model;
  const cartItems = useSelector((state) => state.cart.order1.items).find(
    (item) => item.id === id
  );
  const test = "";
  if (cartItems) {
    test = cartItems.quantity;
  }

  return (
    <div>
      <div className={classes["productExpanded-details"]}>
        <div>{props.itemid}</div>
        <div>
          {props.color} {props.size}
        </div>
        <div>
          <input
            type="number"
            min="0"
            className={classes.input}
            onChange={setCartHandler}
            value={test}
          />
        </div>
      </div>
    </div>
  );
};
