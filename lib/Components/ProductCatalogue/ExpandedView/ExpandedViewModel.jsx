import Image from "next/image";
import { ExpandedViewItems } from "./ExpandedViewItems";
import classes from "./ExpandedViewModel.module.css";
import { Prevent } from "../../Functions/Prevent";

export const ExpandedViewModel = (props) => {
  return (
    <div className={classes.productExpanded}>
      <div>
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
      <div className={classes.productImageAndDescription}>
        <div>
          <Image src="/Images/4FORTY_AIR_MIPS.jpeg" width="250" height="250" />
        </div>

        <div className={classes["productExpanded-description"]}>
          {props.items.Longdescription}
        </div>
      </div>
      <div
        className={classes["productExpanded-items"]}
        onClick={Prevent(() => console.log("Child Element!"))}>
        <div className={classes["productExpanded-heading"]}>
          <div>Item</div>
          <div>Variant</div>
          <div>Quantity</div>
        </div>
        <ExpandedViewItems {...props} />
      </div>
    </div>
  );
};
