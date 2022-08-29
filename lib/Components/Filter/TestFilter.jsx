import { ClassNames } from '@emotion/react';
import ProductData from '../Products/ProductData';
import { TestFilter2 } from './TestFilter2';
import classes from './TestFilter.module.css';


export default function TestFilter() {
  
  const dataFilters = ProductData;

//Brand Steg 1
  let uniqueKeys = Object.keys(dataFilters.reduce(function(result, obj) {
    return Object.assign(result, obj);
  }, {}))

  let uniqueKeyArray = [...new Map(Object.values(dataFilters).map((item) => [item[uniqueKeys[1]], item])).values()]
  
    return (
      <div className={classes.test}>
        {uniqueKeys.map((item, i) => (
          <TestFilter2 
            key={i}
            items={item}
          />
        ))}
      </div>
    )

}

