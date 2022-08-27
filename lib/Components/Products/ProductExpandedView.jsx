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
                <Image src="/Images/4FORTY_AIR_MIPS.jpeg" width="50" height="50" />
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
          </div>
          <ProductExpandedViewItems {...props} />

        </div>

    )

}

