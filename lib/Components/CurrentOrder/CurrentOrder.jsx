import { useSelector } from "react-redux";
import { OrderRow } from "./OrderRow";
import classes from "./CurrentOrder.module.css";

export const CurrentOrder = () => {
  const cart = useSelector((state) => state.cart);

  const cart3 = Object.entries(cart).filter((item) => item[1].selected == true)

  const test2 = Array.from(new Set(cart3.map(item => item[1].items.map((item)=> item.id)).flat(1))).sort()

  const selectedOrders = cart3.map((item) => item[0]);

  return (
    <div className={classes.cart}>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>Item number</th>
            <th>Name</th>
            <th>Color</th>
            <th>Size</th>
            <th>Net</th>
            <th>Retail</th>
            {selectedOrders.map((item, i) => (
              <th key={i}>{item}</th>
            ))}
          </tr>
          {test2.map((item, i) => (
            <OrderRow
              key={i}
              item={{
                id: item,
                orders: selectedOrders
              }}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
