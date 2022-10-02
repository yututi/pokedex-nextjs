import type { NextPage } from 'next'
import SuspenseOrNotReady from '@/components/SuspenseOrNotReady'
import PokemonList, {Loading} from "@/components/PokemonList"
import Container from '@mui/material/Container'
import { memo, Suspense } from 'react'
import { Alert } from '@mui/material'

const Pokemons: NextPage = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Alert sx={{mb:2}} severity="info">このページはSSGを使っています。リストはCSRですがSWRを使ってキャッシュしています。</Alert>
      <PokemonList></PokemonList>
    </Container>
  )
}

export default memo(Pokemons)
