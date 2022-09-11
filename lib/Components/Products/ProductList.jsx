import ProductRow from './ProductRow';

export default function ProductList(props) {
  let uniqueModelArray = [...new Map(Object.values(props).map((item) => [item["Modelname"], item])).values()]
  let uniqueValues = uniqueModelArray.map((item) => Object.values(props).filter((values) => values['Modelname'] == item['Modelname']))

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


