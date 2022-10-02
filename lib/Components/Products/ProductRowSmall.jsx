import classes from './ProductRowSmall.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { useSelector, shallowEqual } from 'react-redux'

export const ProductRowSmall = (props) => {

    

    const dispatch = useDispatch()

    const addToCartHandler = () => {
        dispatch(cartActions.addItemToCart({
            id,
            title,
            price,
        }))
    }

    const setCartHandler = (event) => {
        dispatch(cartActions.setItemAmount({
            id,
            title,
            price,
            quantity: event.target.value
        }))
    }
    const id = props.itemid
    const title = props.color
    const price = 100

    const cartItems = useSelector(state => state.cart.items).find(item => item.id === id)
    
    const test = 0

    try {
        test = cartItems.quantity
      } catch (error) {
        console.error(error);
        // expected output: ReferenceError: nonExistentFunction is not defined
        // Note - error messages will vary depending on browser
      }
    return (
        

        <div>
            <div className={classes['productExpanded-details']}>
                <div>
                    {props.itemid}
                </div>
                <div>
                    {props.color} {props.size}
                </div>
                <div>
                <input
                type = "number"
                min = "0"
                className={classes.input}
                onChange={setCartHandler}
                value={test}
               
                
                />

                </div>
                
                </div>
            </div>
        
    )

}
