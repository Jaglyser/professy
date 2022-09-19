import { Button, Grid, Stack } from '@mui/material'
import { Container } from '@mui/system'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import App from '../lib/Components/index/App'
import ProductData from '../lib/Components/Products/ProductData'
import { gql, useQuery } from '@apollo/client'
import client, { initClient } from '../client/client'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { LoginPage } from '../lib/Components/Login/LoginPage'
import Link from 'next/link'
import { getCookies } from 'cookies-next'

const Home = () => {
  const jsonData = ProductData
  const router = useRouter()
  const [status, setStatus] = useState()
  let test

  useEffect(() => {
    if (test != undefined) setStatus(data)
  }, [test])

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const ComplaintsQuery = gql`
    query session {
      users @rest(type: "string", path: "users") {
        id
      }
    }`

  const data = useQuery(ComplaintsQuery)
  test = data

  // if (data.error) {
  //   return <Link href="/login"><a>you need to login in you piece of shit</a></Link>
  //   // return <LoginPage />
  // }
  return (
    <App {...jsonData}></App>
  )
}



export async function getServerSideProps({ req, res }) {
  const ComplaintsQuery = gql`
    query session {
      users @rest(type: "string", path: "users") {
        id
      }
    }`

  try {
    const { id, token } = getCookies({ req, res })
    const { loading, error, data } = await client.query({
      query: ComplaintsQuery,
      context: {
        headers: {
          "x-access-token": token,
          "involved-party-id": id
        }
      }
    })
  } catch (err) {
    console.log(err)
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: {
    }, // will be passed to the page component as props
  }
}


export default Home
