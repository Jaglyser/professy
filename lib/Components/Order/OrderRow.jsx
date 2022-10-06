import { useDispatch } from 'react-redux';

import classes from './OrderRow.module.css';
import { cartActions } from '../../store/cart-slice';

export const OrderRow = (props) => {
  const dispatch = useDispatch();

  const { title, quantity, total, price, id, model } = props.item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        model,
      })
    );
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{id} {model}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};