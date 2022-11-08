import { useSelector } from "react-redux";
import { OrderRow } from "./OrderRow";
import classes from "./CurrentOrder.module.css";

export const CurrentOrder = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div className={classes.cart}>
      <table>
        <tr>
          <th></th>
          <th>Item number</th>
          <th>Name</th>
          <th>Model</th>
          <th>Net</th>
          <th>Retail</th>
          <th>Quantity</th>
        </tr>
        {cartItems.map((item) => (
          <OrderRow
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
              model: item.model,
            }}
          />
        ))}
      </table>
    </div>
  );
};
