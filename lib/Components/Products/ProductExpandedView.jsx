import Image from 'next/image';
import { ProductExpandedViewItems } from './ProductExpandedViewItems';
import classes from './ProductExpandedView.module.css'
import {Prevent} from '../Functions/Prevent'

export const ProductExpandedview = (props) => {


    return (
        <div className={classes.productExpanded}>
          <div className={classes["productExpanded-images"]}>
            <div onClick={Prevent(()=>console.log("Child Element!"))}>
              <Image src="/Images/4FORTY_AIR_MIPS.jpeg" width="170" height="170" />
            </div>
            <div className={classes["productExpanded-images-small"]}>
              <div onClick={Prevent(()=>console.log("Child Element!"))}>
                <Image src={props.items.Picturefile} width="50" height="50" />
              </div>
              <div onClick={Prevent(()=>console.log("Child Element!"))}>
                <Image src="/Images/4FORTY_AIR_MIPS.jpeg" width="50" height="50" />
              </div>
              <div onClick={Prevent(()=>console.log("Child Element!"))}>
                <Image src="/Images/4FORTY_AIR_MIPS.jpeg" width="50" height="50" />
              </div>
            </div>
          </div>
          <div className={classes["productExpanded-information"]}>

            <div className={classes["productExpanded-detail"]}>
                  {props.items.Shortdescription}
            
              <div className={classes["productExpanded-description"]}>  
                {props.items.Longdescription}
              </div>
            </div>
          
          </div>
          <div className={classes["productExpanded-items"]} onClick={Prevent(()=>console.log("Child Element!"))}>
            <div className={classes["productExpanded-heading"]}>
            <div>Item</div>
            <div>Variant</div>
            <div>Quantity</div>
            </div>
          <ProductExpandedViewItems 
          {...props}
          />
            <div>
              <button className={classes["productExpanded-save"]}>Save</button>
            </div>
          </div>
        </div>

    )

}

