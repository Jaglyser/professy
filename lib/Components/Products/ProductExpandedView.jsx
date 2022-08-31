import Image from 'next/image';
import { ProductExpandedViewItems } from './ProductExpandedViewItems';
import classes from './ProductExpandedView.module.css'

export const ProductExpandedview = (props) => {


    return (
        <div className={classes.productExpanded}>
          <div className={classes["productExpanded-images"]}>
            <div>
              <Image src="/Images/4FORTY_AIR_MIPS.jpeg" width="170" height="170" />
            </div>
            <div className={classes["productExpanded-images-small"]}>
              <div>
                <Image src={props.items.Picturefile} width="50" height="50" />
              </div>
              <div>
                <Image src="/Images/4FORTY_AIR_MIPS.jpeg" width="50" height="50" />
              </div>
              <div>
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
          <ProductExpandedViewItems 
          {...props} 
          />

        </div>

    )

}

