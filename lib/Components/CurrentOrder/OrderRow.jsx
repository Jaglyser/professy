import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import classes from "./OrderRow.module.css";
import { cartActions } from "../../store/cart-slice";
import ProductData from "../../data/ProductData";
import { OrderRowInput } from "./OrderRowInput";

export const OrderRow = (props) => {
  const dispatch = useDispatch();
  const SelectedMainOrder = useSelector((state) => state.mainOrder.mainOrder);
  const { id } = props.item;

  const itemData = ProductData.filter(
    (item) => item.ItemNumber == id
  )[0];

  const shortDescription = itemData.Shortdescription
  const model = itemData.Modelname
  const netPrice = itemData.Netprice
  const retailPrice = itemData.Recommendedretailprice
  const color = itemData.Color
  const size = itemData.Size 

  const removeItemHandler = () => {
    dispatch(
      cartActions.removeItemFromCart({
        id,
        model,
        order: SelectedMainOrder,
      })
    );
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        model,
        order: SelectedMainOrder,
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
        model,
        quantity: eventQuantity,
        order: SelectedMainOrder,
      })
    );
  };

  const cartItems = useSelector((state) => state["cart"][SelectedMainOrder]["items"]).find(
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
      <th>{shortDescription}</th>
      <th>{color}</th>
      <th>{size}</th>
      <th>{netPrice}</th>
      <th>{retailPrice}</th>

      <th>
        <input
          type="number"
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
