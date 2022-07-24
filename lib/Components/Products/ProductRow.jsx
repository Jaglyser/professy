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


  let sizes = new Set();
  let colors = new Set();

  return (

    <div className="row product" onClick={startEditingHandler}>
      {!fullProductView && (
        <div className="smallProductRow">
          <div className="col-md-2">
            <Image src="/Images/4FORTY_AIR_MIPS.jpeg" width="50" height="50" />
          </div>
          <div className="col-md-2">{props.items.Shortdescription}</div>
          <div className="col-md-2">{props.items.Netprice}</div>
          <div className="col-md-2">{props.items.Recommendedretailprice}</div>
        </div>

      )}
      {fullProductView && (
        <div>
          <div className="col-md-2">
            <Image src="/Images/4FORTY_AIR_MIPS.jpeg" width="50" height="50" />
          </div>
          <div>
            <p>{props.items.Shortdescription}</p>
          </div>
          <div className="color-detail">
            <h4>Colors</h4>
              {props.values.map((value, i) => {
                if (!colors.has(value.Color)) {
                  colors.add(value.Color)
                  return (<div>{value.Color}</div>)
                }
        })}
          </div>
          <div className="col-md-8 product-detail">
            <h4>Sizes</h4>
              {props.values.map((value, i) => {
                if (!sizes.has(value.Size)) {
                  sizes.add(value.Size)
                    return (<div>{value.Size}</div>)
          }
        })}
      </div>
      <div className="col-md-2 product-price">
        $19.99
      </div>
        </div>

      )}






    </div>
  );
}

export default ProductRow;
export default ProductRow;
