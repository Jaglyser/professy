import ProductData from "../Products/ProductData";
import { TestFilter3 } from "./TestFilter3";
import classes from './TestFilter2.module.css'

export const TestFilter2 = (props) => {

    let uniqueKeyArray = [...new Map(Object.values(ProductData).map((item) => [item[props.items], item])).values()]

    const currentCategory = props.items;

    return (
        <div>
        <div className={classes.category}>
            {props.items}
        </div>
            <div>
              {uniqueKeyArray.map((item, i) => (
                <TestFilter3
                  key={i}
                  items={item[currentCategory]}
                />
              ))}
            </div>
        </div>
    )
    
    
}