import { Input } from "@mui/material";
import { ChangeEvent } from "react";
import Papa from 'papaparse'
import client from "../../client/client";
import { gql } from "@apollo/client";

export default function Upload() {
    const dataMutation = gql`
    mutation sendDataMutation(
        $data: String
    ) {
        credentials(input: $data)
        @rest(type: "string", path: "read", method: "POST") {
            data
        }
    }
`
    const sendData = async (data: any) => {
        console.log(data)
        try {
            client.mutate({ mutation: dataMutation, variables: { data } })
        } catch (err) {
            console.log(err)
        }
    }

    const onChange = async (event: ChangeEvent) => {
        const target = event.target as HTMLInputElement
        if (target.files) {
            Papa.parse(target.files[0], {
                complete: sendData
            })
        }
    }
    return <div><Input type="file" onChange={onChange} /></div>
}