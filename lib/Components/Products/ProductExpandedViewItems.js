export const ProductExpandedViewItems = (props) => {

    let itemNumbers = new Set();

    return ( 
        <div className="productExpanded-items">
        {props.values.map((value, i) => {
          if (!itemNumbers.has(value.ItemNumber)) {
            itemNumbers.add(value.ItemNumber)
            return (<div>
              <div className="productExpanded-items-details">
                  <div>
                    {value.ItemNumber}
                  </div>
                  <div>
                    {value.Color}
                  </div>
                  <div>
                    {value.Size}
                  </div>
                  
                  <div>
                    {props.items.Netprice}
                  </div>
                  <div>
                    {props.items.Recommendedretailprice} 
                  </div>
                  
                  <div>
                    <input className='input'></input>
                  </div>
                  
                </div>
              </div>)
          }
        })}
      </div>
    )
}


