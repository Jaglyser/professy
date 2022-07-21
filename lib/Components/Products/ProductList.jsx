import React, { Component } from 'react';
import ProductRow from './ProductRow';
import ProductData from './ProductData';



export default function ProductList(jsonData) {

  console.log(typeof (jsonData))

  return (
    <div className="container product-list main-content">
      {Object.values(jsonData).map((row, i) => {
        return (<ProductRow items={row} />)
        // return (<div>test</div>)
      })}

      {/* for each loop */}
      {/* <ProductRow items={ProductData[1]} /> */}
      {/* <ProductRow />
        <ProductRow />
        <ProductRow />
        <ProductRow />
        <ProductRow />
        <ProductRow />
        <ProductRow />
        <ProductRow />
        <ProductRow />
        <ProductRow />
        <ProductRow />
        <ProductRow />
        <ProductRow />
        <ProductRow />
        <ProductRow /> */}
    </div>
  );
}


