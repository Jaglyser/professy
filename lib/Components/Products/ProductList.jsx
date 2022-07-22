import React, { Component } from 'react';
import ProductRow from './ProductRow';
import ProductData from './ProductData';



export default function ProductList(jsonData) {
  let uniqueObjArray = [...new Map(Object.values(jsonData).map((item) => [item["Shortdescription"], item])).values()]
  let uniqueValues = uniqueObjArray.map((item) => Object.values(jsonData).filter((values) => values['Shortdescription'] == item['Shortdescription']))

  return (
    <div className="container product-list main-content">
      {/* {Object.values(jsonData).map((row, i) => {
        return (<ProductRow key={i} items={row} />)
      })} */}
      {uniqueObjArray.map((item, i) => (
        <ProductRow key={i} items={item} values={uniqueValues[i]} />
      ))}
    </div>
  )
}


