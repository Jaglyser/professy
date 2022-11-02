import { SelectBox } from "./SelectBox";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import classes from './FilterMenu.module.css'

export const FilterMenu = (props) => {
  const dispatch = useDispatch();
  const data = props.data
  const filterValue = useSelector((state) => state.filters.filters);
  const filter = filterValue.map((item) => item.Category);
  const filteredData = data.filter((item) => filter.includes(item.Category));

  const uniqueCategory = [...new Set(data.map((item) => item.Category))];
  const uniqueBrands = [...new Set(filteredData.map((item) => item.Brand))];

  return (
    <div className={classes.grid}>
      <div>
        {uniqueCategory.map((index, id) => (
          <SelectBox key={id} value={index} category={"Category"} />
        ))}
      </div>
      <div>
        {uniqueBrands.map((index, id) => (
          <SelectBox key={id} value={index} category={"Category"} />
        ))}
      </div>
    </div>
  );
};
