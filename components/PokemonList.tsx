import { useRouter } from 'next/router'
import { usePokemons } from "@/api/pokemon"

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Pagination from '@mui/material/Pagination';
import { Suspense } from 'react';
import Skeleton from '@mui/material/Skeleton';

const PokemonList : React.FC = (props) => {

  return (
    <Suspense fallback={<Skeleton variant="text" width={210} height={118} />}>
      <_PokeList></_PokeList>
    </Suspense>
  );
}

const _PokeList = () => {
  const {
    results = [],
    count,
    nextPage,
    prevPage
  } = usePokemons()

  const router = useRouter()

  return (
    <List>
      {results.map(result => (
        <ListItem key={result.name} style={{width: "300px"}}>
          <ListItemButton onClick={() => router.push(`/pokemons/${result.name}`)}>
            <ListItemText>
              {result.name}
            </ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default PokemonList