import { Button, Grid, Stack } from '@mui/material'
import { Container } from '@mui/system'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div style={{paddingTop: "20px"}}>
      <Container>
        <Stack direction="row" spacing={1}>
          <Button variant="contained">Filter 1</Button>
          <Button variant="contained">Filter 2</Button>
          <Button variant="contained">Filter 3</Button>
          <Button variant="contained">Filter 4</Button>
        </Stack>
      </Container>
    </div>
  )
}

export default Home
