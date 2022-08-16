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
        <div className="productExpanded">
          <div className="productExpanded-images">
            <div>
              <Image src="/Images/4FORTY_AIR_MIPS.jpeg" width="170" height="170" />
            </div>
            <div className="productExpanded-images-small">
              <div>
                <Image src="/Images/4FORTY_AIR_MIPS.jpeg" width="50" height="50" />
              </div>
              <div>
                <Image src="/Images/4FORTY_AIR_MIPS.jpeg" width="50" height="50" />
              </div>
              <div>
                <Image src="/Images/4FORTY_AIR_MIPS.jpeg" width="50" height="50" />
              </div>
            </div>
          </div>
          <div className="productExpanded-information">

            <div className="productExpanded-detail">
                  {props.items.Shortdescription}
            
              <div className="productExpanded-description">  
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
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
