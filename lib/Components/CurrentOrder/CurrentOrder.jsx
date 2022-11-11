import { useSelector } from "react-redux";
import { OrderRow } from "./OrderRow";
import classes from "./CurrentOrder.module.css";

export const CurrentOrder = () => {
  const SelectedMainOrder = useSelector((state) => state.mainOrder.mainOrder);
  const cartItems = useSelector(
    (state) => state["cart"][SelectedMainOrder]["items"]
  );
  const cart = useSelector((state) => state.cart);

  

  const selectedOrdersData = useSelector(
    (state) => state.selectedOrders.selectedOrders
  );

  const selectedOrders = selectedOrdersData.map((item) => item.orders);

  const cart2 = Object.entries(cart).filter(
    (item) => selectedOrders.includes(item[0])
  );

  const test = new Set(Object.values(cart).map((objects) =>
    objects.items.map((item) => item.id)
  ).flat(1))


  const test2 = Array.from(new Set(cart2.map(item => item[1].items.map((item)=> item.id)).flat(1)))


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
            <th>Quantity</th>
          </tr>
          {test2.map((item) => (
            <OrderRow
              key={item}
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
