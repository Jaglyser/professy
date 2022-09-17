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

const Home = () => {
  const jsonData = ProductData
  const router = useRouter()
  const ComplaintsQuery = gql`
    query session {
      session @rest(type: "string", path: "users") 
    }`
  const { data, loading, error } = useQuery(ComplaintsQuery)
  console.log(data, error)
  return (
    <App {...jsonData}></App>
  )
}



// export async function getServerSideProps(context) {
//   const ComplaintsQuery = gql`
//     query session {
//       session @rest(type: "session", path: "") 
//     }
//     `
//   try {
//     const { loading, error, data } = await client.query({
//       query: ComplaintsQuery,
//       context: {
//         headers: {

//         }
//       }
//     })
//   } catch (err) {
//     console.log(err)
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false,
//       },
//     }
//   }

//   const cpl = await fetch('https://meta-spirit-357111.lm.r.appspot.com/')
//   console.log(cpl)
//   return {
//     props: {
//       error: "oops"
//     }, // will be passed to the page component as props
//   }
// }


export default Home
