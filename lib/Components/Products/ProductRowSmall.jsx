import { valueToObjectRepresentation } from '@apollo/client/utilities';
import classes from './ProductRowSmall.module.css';
import { useDispatch } from 'react-redux';

export const ProductRowSmall = (props) => {


    const dispatch = useDispatch()
    const id = props.itemid
    const color = props.color
    const {addToCart} = props

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
                <input className={classes.input} />
                </div>
                
                </div>
            </div>
        
    )

}
