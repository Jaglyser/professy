import { Button, Grid, Stack } from '@mui/material'
import { Container } from '@mui/system'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import App from '../lib/Components/index/App'
import ProductData from '../lib/Components/Products/ProductData'

const Home = () => {
  const jsonData = ProductData
  return (
    <App {...jsonData}></App>
  )
}

export default Home
