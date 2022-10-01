import classes from './ProductExpandedViewItems.module.css';
import {Prevent} from '../Functions/Prevent'
import { useDispatch, useSelector } from 'react-redux';
import { incrementByAmount } from '../../store/counter';
import { counterActions } from '../../store/counter'
export const ProductExpandedViewItems = (props) => {

    let itemNumbers = new Set();
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.counter);
    const increaseHandler = (event) => {
      dispatch(counterActions.set(event.target.value)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 }
    };
 

    return ( 
        <div className={classes['productExpanded-items']} >
        {props.values.map((value, i) => {
          if (!itemNumbers.has(value.ItemNumber)) {
            itemNumbers.add(value.ItemNumber)
            return (<div key={i}>
              <div className={classes['productExpanded-details']}>
                  <div>
                    {value.ItemNumber}
                  </div>
                  <div>
                    {value.Color} {value.Size}
                  </div>
                  <div>
                    <input className={classes.input} 
                     type="number"
                     value={count}
                     onChange={increaseHandler}
                    />
                  </div>
                  
                </div>
              </div>)
          }
        })}
      </div>
    )
}


