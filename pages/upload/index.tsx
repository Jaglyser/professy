import { Input } from "@mui/material";
import { ChangeEvent } from "react";
import Papa from 'papaparse'

export default function Upload() {
    const onChange = (event: ChangeEvent) => {
        const target = event.target as HTMLInputElement
        if (target.files) {
            Papa.parse(target.files[0], {
                complete: (results) => {
                    console.log(results)
                }
            })
        }

    }
    return <div><Input type="file" onChange={onChange} /></div>
}