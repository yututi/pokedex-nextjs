import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { memo } from 'react'
import { SWRConfig } from "swr"
import { PokeAPI } from "pokeapi-types";
import Container from '@mui/material/Container'
import fetch from "node-fetch"
import BerryList from '@/components/BerryList';
import { Alert } from '@mui/material';

const Berries: NextPage<ServerSideProps> = ({fallback = {}}) => {
  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Alert sx={{mb:2}} severity="info">このページはISRを使っています。1,2ページ目が作成済みで、それ以降は動的に作成します。</Alert>
      <SWRConfig value={{fallback}}>
        <BerryList></BerryList>
      </SWRConfig>
    </Container>
  )
}

type ServerSideProps = {
  fallback: Record<string, PokeAPI.NamedAPIResourceList>
}

const DEFAULT_PAGE_SIZE = 10

export const getStaticProps: GetStaticProps<ServerSideProps> = async (context) => {

  const page = Number(context.params?.page || 1)

  const param = new URLSearchParams({
    offset: `${(page - 1) * DEFAULT_PAGE_SIZE}`,
    limit: `${DEFAULT_PAGE_SIZE}`
  })

  const path = `/api/pokedex/berry?${param.toString()}`

  const res = await fetch(`https://pokeapi.co/api/v2/berry?${param.toString()}`).then(res => {
    return new Promise<any>(resolve => {
      setTimeout(() => resolve(res), 3000)
    })
  })
  const body = await res.json() as PokeAPI.NamedAPIResourceList

  return {
    props: {
      fallback : {
        [path]: body
      }
    }
  }
}

type Query = {
  page: string
}

export const getStaticPaths: GetStaticPaths<Query> = () => {
  const paths = [...Array(2).keys()].map(idx => ({
    params:{page:`${idx+1}`}
  }))
  return {
    paths : paths,
    fallback: true
  }
}

export default memo(Berries)
