import ProductRow from './ProductRow';

export default function ProductList(jsonData) {
  let uniqueModelArray = [...new Map(Object.values(jsonData).map((item) => [item["Modelname"], item])).values()]
  let uniqueValues = uniqueModelArray.map((item) => Object.values(jsonData).filter((values) => values['Modelname'] == item['Modelname']))

  return (
    <div>

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


