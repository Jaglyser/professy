import { useSelector } from 'react-redux'
import { OrderRow } from './OrderRow'
import classes from './CurrentOrder.module.css'


export const CurrentOrder = () => {

  const cartQuantity = useSelector(state => state.cart.totalQuantity)
  const cartItems = useSelector(state => state.cart.items)
    return (
      <div className={classes.cart}>
        tests
        <div>
          {cartQuantity}
        </div>
        <div>
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
        </div>
      </div> 
    )
        
}

