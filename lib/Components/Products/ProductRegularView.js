import Image from 'next/image';

export const ProductRegularView = (props) => {
    return (
        <div className="row product">
          <div className="product-image">
            <Image src="/Images/4FORTY_AIR_MIPS.jpeg" width="50" height="50" />
          </div>
          <div className="product-detail">
            {props.items.Shortdescription}
          </div>
          <div className="product-priceAndInput">
            <div className="product-price">
              <div>{props.items.Netprice}</div>
            </div>
            <div className="product-price">
              <div>{props.items.Recommendedretailprice}</div>
            </div>
            <div>
              <input className='input'></input>
            </div>
          </div>
        </div>
)}

