import ProductListRow from "./ProductListRow";

export default function ProductList(props) {
  let uniqueModelArray = [
    ...new Map(
      Object.values(props).map((item) => [item["Modelname"], item])
    ).values(),
  ];
  let uniqueValues = uniqueModelArray.map((item) =>
    Object.values(props).filter(
      (values) => values["Modelname"] == item["Modelname"]
    )
  );

  return (
    <div>
      {uniqueModelArray.map((item, i) => (
        <ProductListRow key={i} items={item} values={uniqueValues[i]} />
      ))}
    </div>
  );
}
