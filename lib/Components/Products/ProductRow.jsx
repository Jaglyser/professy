import Image from 'next/image';
import React, { useState } from 'react';


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

  let itemNumbers = new Set();
  let Colors = new Set();

  return (

    <div onClick={startEditingHandler}>
      {!fullProductView && (
        <div className="row product">
          <div className="col-md-2">
            <Image src="/Images/4FORTY_AIR_MIPS.jpeg" width="50" height="50" />
          </div>
          <div className="col-md-8 product-detail">
            {props.items.Shortdescription}
          </div>
          <div className="col-md-8 product-price">
            <p>{props.items.Netprice}</p>
            <p>{props.items.Recommendedretailprice}</p>
          </div>
        </div>

      )}
      {fullProductView && (
        <div className="row productExpanded">
          <div className="col-md-2">
            <Image src="/Images/4FORTY_AIR_MIPS.jpeg" width="150" height="150" />
          </div>
          <div className="productExpanded-detail">
            <p>{props.items.Shortdescription}</p>
          </div>
          <div className="row itemsExpandedView">
            {props.values.map((value, i) => {
              if (!itemNumbers.has(value.ItemNumber)) {
                itemNumbers.add(value.ItemNumber)
                return (<div>
                  <div className="itemsExpandedView-details">
                      <div>
                        {value.ItemNumber}
                      </div>
                      <div>
                        {value.Size}
                      </div>

                      <div>
                        {props.items.Netprice}
                      </div>
                      <div>
                        {props.items.Recommendedretailprice} 
                      </div>
                      <div>
                        <input className='input'></input>
                      </div>
                    </div>
                  </div>)
              }
            })}
          </div>

        </div>

      )}
    </div>
  );
}

export default ProductRow;
