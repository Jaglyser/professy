import { Button, Grid, Stack } from '@mui/material'
import { Container } from '@mui/system'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import App from '../lib/Components/index/App'
import ProductData from '../lib/data/ProductData'
import { gql, useQuery } from '@apollo/client'
import client, { initClient } from '../client/client'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { LoginPage } from '../lib/Components/Login/LoginPage'
import Link from 'next/link'
import { getCookies } from 'cookies-next'
import { withIronSessionSsr } from 'iron-session/next'
import { sessionOptions } from '../lib/session'
import { store } from '../lib/store/index'
import { Provider } from 'react-redux'

const Home = () => {
  const jsonData = ProductData
  const router = useRouter()
  const [status, setStatus] = useState()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // const ComplaintsQuery = gql`
  //   query session {
  //     users @rest(type: "string", path: "users") {
  //       id
  //     }
  //   }`

  // const data = useQuery(ComplaintsQuery)

  // useEffect(() => {
  //   if (data.error != undefined) {
  //     router.push("/login")
  //   }
  // }, [data])



  // if (data.error) {
  //   return <Link href="/login"><a>you need to login in you piece of shit</a></Link>
  //   // return <LoginPage />
  // }
  // if (data.loading) {
  //   return <div>loading</div>
  // }
  return (
    <Provider store={store}>
      <App data={jsonData}></App>
    </Provider>
  )
}


export const getServerSideProps = withIronSessionSsr(async function ({ req, res }) {
  // const ComplaintsQuery = gql`
  //   query session {
  //     users @rest(type: "string", path: "users") {
  //       id
  //     }
  //   }`

  const { user } = req.session
  try {


    // const client = initClient(user.token, user.id)
    // const { loading, error, data } = await client.query({
    //   query: ComplaintsQuery,
    //   context: {
    //     headers: {
    //       "x-access-token": user.token,
    //       "involved-party-id": user.id
    //     }
    //   }
    // })
  } catch (err) {
    // if (process.env.NODE_ENV === 'development') {
    //   return {
    //     props: {}
    //   }
    // }

    // return {
    //   redirect: {
    //     destination: '/login',
    //     permanent: false,
    //   },
    // }
  }
  // if (process.env.NODE_ENV === 'development') {
  //   return {
  //     props: {}
  //   }
  // }
  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: {
    }, // will be passed to the page component as props
  }
}, sessionOptions)

export default Home
