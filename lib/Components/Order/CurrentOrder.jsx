import state from '../../store/index'
import ProductData from '../Products/ProductData'


export const CurrentOrder = () => {
    const obj = {}
    for (const key of ProductData) {
        obj[key.ItemNumber] = 0;
   }
   const convertedArray = Object.entries(obj).map(([key, value]) => ({itemnumber: key, amount: value}));
   console.log(convertedArray);
    return (
      <div>
        test
        {convertedArray.map((item, i) => (
          <div>
            {item.itemnumber} {item.amount}
          </div>
        ))}

        {/* {uniqueModelArray.map((item, i) => (
        <ProductRow 
          key={i}
          items={item}
          values={uniqueValues[i]}
        />
      ))} */}
      </div> 
    )
        
}

