import classes from "./OrderRow.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

export const OrderRowInput = (props) => {
  const order = props.order
  const id = props.id
  const model = props.model
  const dispatch = useDispatch();

  const setCartHandler = (event) => {
    const eventQuantity = 0;
    if (!event.target.value.trim().length == 0) {
      eventQuantity = event.target.value;
    }

    dispatch(
      cartActions.setItemAmount({
        id,
        model,
        quantity: eventQuantity,
        order: order,
      })
    );
  };

  const cartItems = useSelector(
    (state) => state["cart"][props.order]["items"]
  ).find((item) => item.id === props.id);

  let test = "";
  if (cartItems) {
    test = cartItems.quantity;
  }

  return (
    <th>
      <input
        type="number"
        className={classes.input}
        onChange={setCartHandler}
        value={test}
      />
    </th>
  );
};
