import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import classes from "./OrderRow.module.css";
import { cartActions } from "../../store/cart-slice";

export const OrderRow = (props) => {
  const dispatch = useDispatch();

  const { title, quantity, total, price, id, model } = props.item;

  const removeItemHandler = () => {
    dispatch(
      cartActions.removeItemFromCart({
        id,
        model,
      })
    );
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        model,
      })
    );
  };

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

  const cartItems = useSelector((state) => state.cart.order1.items).find(
    (item) => item.id === id
  );
  const test = "";
  if (cartItems) {
    test = cartItems.quantity;
  }

  return (
    <tr>
      <th>
        <Image src="/Images/4FORTY_AIR_MIPS.jpeg" width="30" height="30" />
      </th>
      <th>{id}</th>
      <th>{model}</th>
      <th>{model}</th>
      <th>{price}</th>
      <th>{price}</th>

      <th>
        <input
          type="number"
          min="0"
          className={classes.input}
          onChange={setCartHandler}
          value={test}
        />
      </th>
      <th>
        <button onClick={removeItemHandler}>-</button>
        <button onClick={addItemHandler}>+</button>
      </th>
    </tr>
  );
};
