import { useSelector } from "react-redux";
import { OrderRow } from "./OrderRow";
import classes from "./CurrentOrder.module.css";

export const CurrentOrder = () => {
  const cartItems = useSelector((state) => state.cart.order1.items);
  const order = useSelector((state) => state.cart);

  console.log(order);
  return (
    <div className={classes.cart}>
      <table>
        <tbody>
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
        </tbody>
      </table>
    </div>
  );
};
