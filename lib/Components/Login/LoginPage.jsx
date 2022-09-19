import next from 'next'
import classes from './LoginPage.module.css'
import Image from "next/image";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { gql, useQuery } from '@apollo/client'
import client from '../../../client/client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { setCookie, getCookies } from 'cookies-next'
import fetchJson, { FetchError } from '../../fetchJson'

export const updateData = (key, value, data, setState) => {
    data[key] = value
    setState({ ...data })
}

export const LoginPage = () => {
    const [token, setToken] = useState()
    const [id, setId] = useState()
    const [values, setValues] = useState({
        username: '',
        password: ''
    })
    const router = useRouter()


    useEffect(() => {
        localStorage.setItem("token", token);
        localStorage.setItem("id", id);
        if (token != undefined && id != undefined) {
            router.push("/")
        }
    }, [token, id])


    const loginQuery = gql`
            mutation LoginQuery(
                $username: String,
                $password: String
            ) {
                credentials(input: {username: $username, password: $password})
                @rest(type: "string", path: "authenticate", method: "POST") {
                    token
                    secret
                    id
                }
            }
    `
    const login = async () => {
        try {
            const { data } = await client.mutate({ mutation: loginQuery, variables: { password: values.password, username: values.username } })
            const body = {
                token: data?.credentials?.token,
                id: data?.credentials?.id
            }
            const test = await fetchJson('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })
            setToken(data?.credentials?.token)
            setId(data?.credentials?.id)
            router.push("/")
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className={classes.main}>
            <div className={classes.loginbox}>
                <div className={classes.logo}><Image height={70} width={210} src="/Images/proffesy.png" /></div>
                <div className={classes.text}>Proffesy delivers a nice text about what we do and and why you should use our product</div>
                <div className={classes.logintext}>LOG IN</div>
                <div className={classes.input}>
                    <TextField className={classes.textfield}
                        id="username-input"
                        label="Username"
                        type="username"
                        autoComplete="current-username"
                        size="small"
                        onChange={(e) => updateData('username', e.target.value, values, setValues)}
                    />
                </div>
                <div className={classes.input}>
                    <TextField className={classes.textfield}
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        size="small"
                        onChange={(e) => updateData('password', e.target.value, values, setValues)}
                    />

                </div>
                <div className={classes.loginbutton}>
                    <Button variant="contained" onClick={() => login()} color="success">Login</Button>
                </div>
                <div className={classes.contact}>
                    <p>Contact us for more information</p>
                    <p>contact@proffesy.com</p>
                </div>
            </div>
        </div>
    )
}