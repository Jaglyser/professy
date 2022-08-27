import ProductRow from './ProductRow';
import classes from './ProductList.module.css'

export default function ProductList(jsonData) {
  let uniqueModelArray = [...new Map(Object.values(jsonData).map((item) => [item["Modelname"], item])).values()]
  let uniqueValues = uniqueModelArray.map((item) => Object.values(jsonData).filter((values) => values['Modelname'] == item['Modelname']))

  return (
    <div className={classes.content}>

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


