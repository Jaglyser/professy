import { SelectBox } from "./SelectBox";

export const FilterMenu = (props) => {
  const unique = [...new Set(props.data.map((item) => item.Category))];
  return <div>
    {unique.map((index, id) => (
        <SelectBox key={id} value={index} category={"Category"} />
    ))}
    </div>;
};
