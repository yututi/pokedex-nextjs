import type { NextPage } from 'next'
import SuspenseOrNotReady from '@/components/SuspenseOrNotReady'
import PokemonList, {Loading} from "@/components/PokemonList"
import Container from '@mui/material/Container'
import { memo, Suspense } from 'react'

const Pokemons: NextPage = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <PokemonList></PokemonList>
    </Container>
  )
}

export default memo(Pokemons)
