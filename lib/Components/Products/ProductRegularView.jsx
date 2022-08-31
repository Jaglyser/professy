import Image from 'next/image';
import classes from './ProductRegularView.module.css'
import {Prevent} from '../Functions/Prevent'

export const ProductRegularView = (props) => {
    return (
        <div className={classes.product}>
          <div> <Image src="/Images/4FORTY_AIR_MIPS.jpeg" width="50" height="50" /> </div>
            <div className={classes['product-detail']}>
              <div className={classes['product-description']}> {props.items.Shortdescription} </div>
            
              <div className={classes['product-priceAndInput']} onClick={Prevent(()=>console.log("Child Element!"))}>
                <div className={classes['product-price']}>
                  <div>{props.items.Netprice}</div>
                </div>
                <div className={classes['product-price']} >
                  <div>{props.items.Recommendedretailprice}</div>
                </div>
                <div>
                  <input className={classes['input']}></input>
                </div>
              </div>
            </div>
        </div>
)}

