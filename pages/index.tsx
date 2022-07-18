import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { useRouter } from 'next/router'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from 'next/link'
const PokemonList = dynamic(() => import("@/components/PokemonList"), { suspense: true })

const Home: NextPage = () => {

  const router = useRouter()

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        This is a Pokedex App using Next.js.
      </Typography>
      <Link href={"/pokemons"}>Pokemons</Link>
    </Container>
  )
}

export default Home
