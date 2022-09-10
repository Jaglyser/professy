import React, { useState } from 'react';
import { ProductExpandedview } from './ProductExpandedView';
import { ProductRegularView } from './ProductRegularView';
import classes from './ProductRow.module.css'


const ProductRow = (props) => {
  const [fullProductView, setFullProductView] = useState(false);


  const startEditingHandler = () => {

    if (!fullProductView) { setFullProductView(true); }

    else { setFullProductView(false); }

  };
  
  return (

    <div className={classes.product} onClick={startEditingHandler}>
      {!fullProductView && (
        <ProductRegularView {...props}/>
      )}
      {fullProductView && (
        <div>
        <ProductRegularView {...props}/>
        <ProductExpandedview {...props}/>
        </div>
      )}
    </div>
  );
};

export default ProductRow;
