import { Checkbox, FormControlLabel } from "@mui/material";

export default function SingleFilter(product) {

    return (
        <div style={{ width: "20%", padding: "10px 0" }}>
            <div style={{ fontWeight: "bold" }}>{product.label}</div>
            {product.categories.map((prod, i) => (
                <FormControlLabel
                    control={
                        <Checkbox
                            name="SomeName"
                            value="SomeValue"
                        />
                    }
                    label={prod} />
            ))
            }</div>
    )
}