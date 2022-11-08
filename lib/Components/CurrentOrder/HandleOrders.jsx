import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

export const HandleOrders = () => {
  const dispatch = useDispatch();
  const cartItems = Object.keys(useSelector((state) => state.cart));
  console.log(cartItems);

  const addOrderHandler = () => {


    const orderName = "order3";
    dispatch(
      cartActions.addOrder({
        orderName
      })
    );
  };

  return (
    <div>
      <button onClick={addOrderHandler}>test</button>
    </div>
  );
};
