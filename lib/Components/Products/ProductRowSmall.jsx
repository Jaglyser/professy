import { valueToObjectRepresentation } from '@apollo/client/utilities';
import classes from './ProductRowSmall.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { ButtonGroup } from 'react-bootstrap';

export const ProductRowSmall = (props) => {

    const dispatch = useDispatch()

    const addToCartHandler = () => {
        dispatch(cartActions.addItemToCart({
            id,
            title,
            price,
        }))
    }
    const id = props.itemid
    const title = props.color
    const price = 100

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
                <button onClick={addToCartHandler}></button>
                </div>
                
                </div>
            </div>
        
    )

}
