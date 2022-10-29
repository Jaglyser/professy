import { ClassNames } from '@emotion/react';
import ProductData from '../../data/ProductData'
import { TestFilter2 } from './TestFilter2';
import classes from './TestFilter.module.css';
import MultipleSelectChip from './MultipleSelectChip';
import { Fragment } from 'react';
import Image from 'next/image';


export default function TestFilter() {

  const dataFilters = ProductData;

  //Brand Steg 1
  let uniqueKeys = Object.keys(dataFilters.reduce(function (result, obj) {
    return Object.assign(result, obj);
  }, {}))

  let uniqueModelArray = [...new Map(Object.values(dataFilters).map((item) => [item["Category"], item])).values()]

  const filterCategories = [
    'Helmets',
    'Shoes',
    'Clothes',
    'Bikes',
    'Lights',
    'Accessories'

  ];

  const secondFilterCategories = [
    "Brand",
    "Sub-category",
    "Modelname",
    "Color"
  ];

  return (
    <div>

      <div className={classes.heading}>
        <div>Categories</div>
        <div>Filters</div>
      </div>
      <div className={classes.columns}>
        <div className={classes.categories}>
          {filterCategories.map((item, i) => (
            <div key={i} className={classes.category}>
              <div><Image src="/Images/4FORTY_AIR_MIPS.jpeg" width="40" height="40" /></div>
              <div className={classes.text}>{item}</div>
            </div>
          ))}
        </div>
        <div>
          {secondFilterCategories.map((item, i) => (
            <MultipleSelectChip
              key={i}
              items={item}
            />
          ))}
        </div>
      </div>

    </div>

  )

}

