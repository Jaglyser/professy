import ProductCategories from "../Products/ProductCategories"
import SingleFilter from "./SingleFilter"

export default function Filters() {
    const itemList = ProductCategories
    return Object.keys(itemList).map((item, i) => {
        const product = {
            label: item,
            categories: itemList[item]
        }
        return <SingleFilter key={i} {...product}></SingleFilter>
    })
}