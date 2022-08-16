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
          <div className="product-image">
            <Image src="/Images/4FORTY_AIR_MIPS.jpeg" width="50" height="50" />
          </div>
          <div className="product-detail">
            {props.items.Shortdescription}
          </div>
          <div className="product-priceAndInput">
            <div className="product-price">
              <div>{props.items.Netprice}</div>
            </div>
            <div className="product-price">
              <div>{props.items.Recommendedretailprice}</div>
            </div>
            <div>
              <input className='input'></input>
            </div>
          </div>
        </div>

      )}
      {fullProductView && (
        <div className="row productExpanded">
          <div className="col-md-2">
            <Image src="/Images/4FORTY_AIR_MIPS.jpeg" width="150" height="150" />
          </div>
          <div classname="productExpanded-detail">
            <p>{props.items.Shortdescription}</p>
          </div>
          <div className="productExpanded-items">
            {props.values.map((value, i) => {
              if (!itemNumbers.has(value.ItemNumber)) {
                itemNumbers.add(value.ItemNumber)
                return (<div>
                  <div className="productExpanded-items-details">
                      <div>
                        {value.ItemNumber}
                      </div>
                      <div>
                        {value.Color}
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
