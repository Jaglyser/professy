import React, { Component } from 'react';
import ProductRow from './ProductRow';
import ProductData from './ProductData';



export default function ProductList(jsonData) {

  console.log(typeof (jsonData))

  return (
    <div className="container product-list main-content">
      {Object.values(jsonData).map((row, i) => {
        return (<ProductRow key={i} items={row} />)
        // return (<div>test</div>)
      })}
    </div>
  );
}


