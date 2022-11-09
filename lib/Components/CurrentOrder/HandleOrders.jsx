import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { SelectOrder } from "./SelectOrders";
import { SelectMainOrder } from "./SelectMainOrder";

export const HandleOrders = () => {
  const dispatch = useDispatch();
  const cartItems = Object.keys(useSelector((state) => state.cart));
  console.log(cartItems);

  const addOrderHandler = () => {
    const orderName = "order3";
    dispatch(
      cartActions.addOrder({
        orderName,
      })
    );
  };

  return (
    <div>
      <SelectMainOrder />
      <button onClick={addOrderHandler}>test</button>
      {cartItems.map((item, i) => (
        <SelectOrder key={i} value={item} />
      ))}
    </div>
  );
};
