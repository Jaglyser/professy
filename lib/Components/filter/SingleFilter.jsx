import { Checkbox, FormControlLabel } from "@mui/material";

export default function SingleFilter({ item }) {
    return (
        <FormControlLabel
            control={
                <Checkbox
                    name="SomeName"
                    value="SomeValue"
                />
            }
            label={item} />
    )
}