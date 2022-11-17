import { useSelector } from "react-redux";
import { OrderRow } from "./OrderRow";
import classes from "./CurrentOrder.module.css";
import { Fragment } from "react";

export const CurrentOrder = () => {
  const cart = useSelector((state) => state.cart);

  const cart3 = Object.entries(cart).filter((item) => item[1].selected == true)

  const test2 = Array.from(new Set(cart3.map(item => item[1].items.map((item)=> item.id)).flat(1))).sort()

  const selectedOrders = cart3.map((item) => item[0]);
    
  console.log(test2);
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
            {selectedOrders.length < 6 && (
              <Fragment>
                <th>Net</th>
                <th>Retail</th>
              </Fragment>
            )}
            {/* <th>Net</th>
            <th>Retail</th> */}

            {cart3.map((item, i) => (
              <th key={i}>{item[1].name}</th>
            ))}
          </tr>
          {test2.map((item, i) => (
            <OrderRow
              key={i}
              item={{
                id: item,
                orders: selectedOrders,
              }}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
