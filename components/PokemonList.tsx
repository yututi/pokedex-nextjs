import { useRouter } from 'next/router'
import { usePokemons } from "@/api/pokemon"

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Pagination from '@mui/material/Pagination';
import Skeleton from '@mui/material/Skeleton';
import { Stack } from '@mui/material';
import { useRef } from 'react';


const PokemonList = () => {

  const router = useRouter()

  const max = useRef<number>(10)

  const page = Number(router.query.page) || 1

  const pokemonsResult = usePokemons(page)

  if (pokemonsResult.loading) {
    return (
      <Stack alignItems={"center"}>
        <Pagination count={max.current} page={page} onChange={(e, newPage) => router.push({pathname: router.pathname, query:{page:newPage}})}></Pagination>
        <Loading/>
      </Stack>
    )
  }

  const {
    results,
    count,
    pageSize
  } = pokemonsResult

  max.current = Math.ceil(count / pageSize)

  return (
    <Stack alignItems={"center"}>
      <Pagination count={max.current} page={page} onChange={(e, newPage) => router.push({pathname: router.pathname, query:{page:newPage}})}></Pagination>
      <List>
        {results.map(result => (
          <ListItem key={result.name} style={{width: "100%"}}>
            <ListItemButton onClick={() => router.push(`/pokemons/${result.name}`)}>
              <ListItemText>
                {result.name}
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}

export const Loading : React.FC = () => {

  const items = Array.from(Array(10).keys())

  return (
    <List>
      {items.map(item => (
        <ListItem key={item} style={{width: "100%"}}>
          <ListItemButton disabled>
            <ListItemText>
              <Skeleton itemType='text' width={100}></Skeleton>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}

export default PokemonList