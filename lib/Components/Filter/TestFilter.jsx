import { ClassNames } from '@emotion/react';
import ProductData from '../Products/ProductData';
import { TestFilter2 } from './TestFilter2';
import classes from './TestFilter.module.css';
import MultipleSelect from './DropDownList';
import MultipleSelectChip from './DropDownList2';


export default function TestFilter() {
  
  const dataFilters = ProductData;

//Brand Steg 1
  let uniqueKeys = Object.keys(dataFilters.reduce(function(result, obj) {
    return Object.assign(result, obj);
  }, {}))

  const filterCategories = [
      'Brand',
      'Category',
      'Sub-category',
      'Modelname',

    ];

    return (
      <div className={classes.test}>
        {filterCategories.map((item, i) => (
          <MultipleSelectChip 
            key={i}
            items={item}
          />
        ))}
      </div>
    )

}
