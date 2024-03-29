import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import classes from "./OrderRow.module.css";
import { cartActions } from "../../store/cart-slice";
import ProductData from "../../data/ProductData";
import { OrderRowInput } from "./OrderRowInput";
import { Fragment } from "react";

export const OrderRow = (props) => {
  const dispatch = useDispatch();
  const SelectedMainOrder = useSelector((state) => state.mainOrder.mainOrder);
  const { id, orders } = props.item;

  const itemData = ProductData.filter((item) => item.ItemNumber == id)[0];

  const shortDescription = itemData.Shortdescription;
  const model = itemData.Modelname;
  const netPrice = itemData.Netprice;
  const retailPrice = itemData.Recommendedretailprice;
  const color = itemData.Color;
  const size = itemData.Size;

  // const removeItemHandler = () => {
  //   dispatch(
  //     cartActions.removeItemFromCart({
  //       id,
  //       model,
  //       order: SelectedMainOrder,
  //     })
  //   );
  // };

  // const addItemHandler = () => {
  //   dispatch(
  //     cartActions.addItemToCart({
  //       id,
  //       model,
  //       order: SelectedMainOrder,
  //     })
  //   );
  // };

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

  const cartItems = useSelector(
    (state) => state["cart"][SelectedMainOrder]["items"]
  ).find((item) => item.id === id);
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
      {orders.length < 8 && <th>{shortDescription}</th>}
      {orders.length >= 8 && <th>{model}</th>}
      <th>{color}</th>
      <th>{size}</th>
      {orders.length < 6 && (
        <Fragment>
          <th>{netPrice}</th>
          <th>{retailPrice}</th>
        </Fragment>
      )}
      {orders.map((item, i) => (
        <OrderRowInput key={i} order={item} id={id} model={model} />
      ))}
    </tr>
  );
};
