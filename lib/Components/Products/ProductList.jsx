import React, { Component } from 'react';
import ProductRow from './ProductRow';
import ProductData from './ProductData';



export default function ProductList(jsonData) {
  let uniqueModelArray = [...new Map(Object.values(jsonData).map((item) => [item["Modelname"], item])).values()]
  let uniqueValues = uniqueModelArray.map((item) => Object.values(jsonData).filter((values) => values['Modelname'] == item['Modelname']))

  return (
    <div className="container product-list main-content">
      
      {uniqueModelArray.map((item, i) => (
        <ProductRow 
          key={i}
          items={item}
          values={uniqueValues[i]}
        />
      ))}
    </div>
  )
}


