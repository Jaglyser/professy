import Image from 'next/image';
import { ProductExpandedViewItems } from './ProductExpandedViewItems';

export const ProductExpandedview = (props) => {

      let itemNumbers = new Set();

    return (
        <div className="productExpanded">
          <div className="productExpanded-images">
            <div>
              <Image src="/Images/4FORTY_AIR_MIPS.jpeg" width="170" height="170" />
            </div>
            <div className="productExpanded-images-small">
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
          <div className="productExpanded-information">

            <div className="productExpanded-detail">
                  {props.items.Shortdescription}
            
              <div className="productExpanded-description">  
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
          </div>
          <ProductExpandedViewItems {...props} />

        </div>

    )

}

