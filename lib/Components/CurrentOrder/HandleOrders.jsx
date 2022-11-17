import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { SelectOrder } from "./SelectOrders";
import { SelectMainOrder } from "./SelectMainOrder";
import PopUpsGallery from "../CreateOrder/PopUpsGallery";
import BasicForm from "../CreateOrder/BasicForm";

export const HandleOrders = () => {
  const dispatch = useDispatch();
  const cartOrders = Object.keys(useSelector((state) => state.cart));

  const addOrderHandler = () => {
    const orderName = "order3";
    dispatch(
      cartActions.addOrder({
        orderName,
      })
    );
  };

  console.log(cartOrders.length);

  return (
    <div>
      <button onClick={addOrderHandler}>test</button>
      <BasicForm />
      <PopUpsGallery />
      <table>
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
          {cartOrders.map((item, i) => (
            <SelectOrder key={i} orderNr={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
