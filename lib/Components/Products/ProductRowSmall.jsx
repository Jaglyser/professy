import classes from './ProductRowSmall.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { useSelector, shallowEqual } from 'react-redux'

export const ProductRowSmall = (props) => {

    

    const dispatch = useDispatch()

    const setCartHandler = (event) => {
        dispatch(cartActions.setItemAmount({
            id,
            title,
            price,
            model,
            quantity: event.target.value
        }))
    }
    const id = props.itemid
    const title = props.color
    const price = 100
    const model = props.model
    const cartItems = useSelector(state => state.cart.items).find(item => item.id === id)
    const totalModelQuantity = useSelector(state => state.cart.totalQuantityModel).find(item => item.model === model)
    
    const test = ""
    const test2 = ""

    try {
        test = cartItems.quantity
        test2 = totalModelQuantity.modelQuantity
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
                    {props.color} {props.size} {test2}
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
