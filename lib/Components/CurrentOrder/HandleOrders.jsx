import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { SelectOrder } from "./SelectOrders";
import { SelectMainOrder } from "./SelectMainOrder";

export const HandleOrders = () => {
  const dispatch = useDispatch();
  const cartItems = Object.keys(useSelector((state) => state.cart));

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
      <button onClick={addOrderHandler}>test</button>

      <tbody>
        <tr>
          <th>
            <h2>Order nr</h2>
          </th>
          <th>
            <h2>Name</h2>
          </th>
          <th>
            <h2>Date</h2>
          </th>
          <th>
            <h4>Select orders</h4>
          </th>
        </tr>
        {cartItems.map((item, i) => (
          <SelectOrder key={i} value={item} />
        ))}
      </tbody>
    </div>
  );
};
