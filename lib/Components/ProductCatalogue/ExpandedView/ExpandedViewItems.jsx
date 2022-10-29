import classes from "./ExpandedViewItems.module.css";
import { ListRowSmall } from "./ListRowSmall";
export const ExpandedViewItems = (props) => {
  let itemNumbers = new Set();

  return (
    <div className={classes["productExpanded-items"]}>
      {props.values.map((value, i) => {
        if (!itemNumbers.has(value.ItemNumber)) {
          itemNumbers.add(value.ItemNumber);
          return (
            <ListRowSmall
              key={i}
              itemid={value.ItemNumber}
              color={value.Color}
              size={value.Size}
              model={value.Modelname}
            />
          );
        }
      })}
    </div>
  );
};
