import type { NextPage } from 'next'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from 'next/link'

const Home: NextPage = () => {

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Poke APIを使ってSSG/SSR/ISRを試すアプリです。すべてのPoke APIへのリクエストに3秒かかるようになっています。
      </Typography>
      <ul>
        <li>
          <Link href={"/pokemons"}>Pokemons(SSG+CSR+SWR)</Link>
        </li>
        <li>
          <Link href={"/berries/1"}>Berries(ISR)</Link>
        </li>
        <li>
          <Link href={"/items/1"}>Items(SSR)</Link>
        </li>
      </ul>
    </Container>
  )
}

export default Home
