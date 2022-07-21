import Image from 'next/image';
import React from 'react';

const ProductRow = (props) => {

  return (
    <div className="row product">
      <div className="col-md-2">
        <Image src="/Images/4FORTY_AIR_MIPS.jpeg" width="50" height="50" />
      </div>
      <div className="col-md-8 product-detail">
        <h4>test</h4>
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="col-md-2 product-price">
        $19.99
      </div>
    </div>
  );
}

export default ProductRow;