import classes from './ProductExpandedViewItems.module.css';
import {Prevent} from '../Functions/Prevent'

export const ProductExpandedViewItems = (props) => {

    let itemNumbers = new Set();

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
                    <input className={classes.input}></input>
                  </div>
                  
                </div>
              </div>)
          }
        })}
      </div>
    )
}


