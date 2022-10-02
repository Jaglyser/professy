import classes from './ProductExpandedViewItems.module.css';
import { ProductRowSmall } from './ProductRowSmall';
export const ProductExpandedViewItems = (props) => {

    let itemNumbers = new Set();
 

    return ( 
        <div className={classes['productExpanded-items']} >
        {props.values.map((value, i) => {
          if (!itemNumbers.has(value.ItemNumber)) {
            itemNumbers.add(value.ItemNumber)
            return (
            <ProductRowSmall           
            key={i}
            itemid={value.ItemNumber}
            color={value.Color}
            size={value.Size}/>
              )
          }
        })}
      </div>
    )
}


