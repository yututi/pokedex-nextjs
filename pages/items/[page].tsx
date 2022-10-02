import type { NextPage, GetServerSideProps } from 'next'
import { memo, useRef } from 'react'
import { SWRConfig } from "swr"
import { PokeAPI } from "pokeapi-types";
import Container from '@mui/material/Container'
import fetch from "node-fetch"
import BerryList from '@/components/BerryList';
import { Alert, Pagination, Stack } from '@mui/material';
import ItemList from '@/components/ItemList';
import { useRouter } from 'next/router';

const Berries: NextPage<ServerSideProps> = ({itemList}) => {

  const router = useRouter()

  const page = Number(router.query.page) || 1

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Alert sx={{mb:2}} severity="info">このページはSSRを使っています。</Alert>
      <Stack alignItems={"center"}>
        <Pagination count={Math.ceil(itemList.count / DEFAULT_PAGE_SIZE)} page={page} onChange={(e, newPage) => router.push({pathname: `/items/${newPage}`})}></Pagination>
        <ItemList isLoading={false} itemList={itemList.results} itemPath="items/detail"></ItemList>
      </Stack>
    </Container>
  )
}

type ServerSideProps = {
  itemList: PokeAPI.NamedAPIResourceList
}

const DEFAULT_PAGE_SIZE = 10

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async (context) => {

  const page = Number(context.params?.page || 1)

  const param = new URLSearchParams({
    offset: `${(page - 1) * DEFAULT_PAGE_SIZE}`,
    limit: `${DEFAULT_PAGE_SIZE}`
  })

  const res = await fetch(`https://pokeapi.co/api/v2/item?${param.toString()}`).then(res => {
    return new Promise<any>(resolve => {
      setTimeout(() => resolve(res), 3000)
    })
  })
  const itemList = await res.json() as PokeAPI.NamedAPIResourceList

  return {
    props: {
      itemList
    }
  }
}

export default memo(Berries)
