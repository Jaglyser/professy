import Image from 'next/image';
import React, { useState } from 'react';
import { ProductExpandedview } from './ProductExpandedView';
import { ProductRegularView } from './ProductRegularView';


const ProductRow = (props) => {
  const [fullProductView, setFullProductView] = useState(false);


  const startEditingHandler = () => {

    if (!fullProductView) {
      setFullProductView(true);
    }

    else {
      setFullProductView(false);
    }

  };

  const stopEditingHandler = () => {
    setFullProductView(false);
  };


  return (

    <div onClick={startEditingHandler}>
      {!fullProductView && (
        <ProductRegularView
          netPrice = {props.items.Netprice}
          recommendedRetailPrice = {props.items.Recommendedretailprice}
          shortDescription = {props.items.Shortdescription}
        />
      )}
      {fullProductView && (
        <ProductExpandedview {...props}/>
      )}
    </div>
  );
};

export default ProductRow;
