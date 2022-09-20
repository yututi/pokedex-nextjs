import { usePokemonByName } from "@/api/pokemon"

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Skeleton from '@mui/material/Skeleton';
import Divider from "@mui/material/Divider";
import { useRouter } from "next/router";

type Props = {
  name: string
}

const Pokemon : React.FC<Props> = ({name}) => {

  const pokemon = usePokemonByName(name)
  const router = useRouter()

  return (
    <Card sx={{ minWidth: 230 }}>
      <CardActions>
        <Button onClick={() => router.back()} size="small">Back</Button>
      </CardActions>
      <CardMedia
        component="img"
        height="300"
        image={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          pokedex no: {pokemon.id}
        </Typography>
        <Typography variant="h5" component="div">
          {pokemon.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {pokemon.types.map(type => type.type.name).join(" ")}
        </Typography>
        <Divider/>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          stats
        </Typography>
        <Typography variant="body2">
          hp: {pokemon.stats.find(s => s.stat.name === "hp")?.base_stat}
        </Typography>
        <Typography variant="body2">
          attack: {pokemon.stats.find(s => s.stat.name === "attack")?.base_stat}
        </Typography>
        <Typography variant="body2">
          deffense: {pokemon.stats.find(s => s.stat.name === "defense")?.base_stat}
        </Typography>
        <Typography variant="body2">
          s-attack: {pokemon.stats.find(s => s.stat.name === "special-attack")?.base_stat}
        </Typography>
        <Typography variant="body2">
          s-deffense: {pokemon.stats.find(s => s.stat.name === "special-defense")?.base_stat}
        </Typography>
        <Typography variant="body2">
          speed: {pokemon.stats.find(s => s.stat.name === "speed")?.base_stat}
        </Typography>
        <Divider />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          spec
        </Typography>
        <Typography variant="body2">
          height: {pokemon.height} cm
        </Typography>
        <Typography variant="body2">
          weight: {pokemon.weight} kg
        </Typography>
      </CardContent>
    </Card>
  );


}

export const Loading :React.FC = () => {
  const router = useRouter()
  
  return (
    <Card sx={{ minWidth: 230 }}>
    <CardActions>
      <Button onClick={() => router.back()} size="small">Back</Button>
    </CardActions>
      <Skeleton sx={{ height: 300 }} itemType="rectangular" animation="wave" />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <Skeleton itemType="text" width={50}/>
        </Typography>
        <Typography variant="h5" component="div">
          <Skeleton itemType="text"/>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <Skeleton itemType="text" width={50}/>
        </Typography>
        <Divider/>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          stats
        </Typography>
        <Typography variant="body2">
          <Skeleton itemType="text" width={50}/>
        </Typography>
        <Typography variant="body2">
          <Skeleton itemType="text" width={50}/>
        </Typography>
        <Typography variant="body2">
          <Skeleton itemType="text" width={50}/>
        </Typography>
        <Typography variant="body2">
          <Skeleton itemType="text" width={50}/>
        </Typography>
        <Typography variant="body2">
          <Skeleton itemType="text" width={50}/>
        </Typography>
        <Typography variant="body2">
          <Skeleton itemType="text" width={50}/>
        </Typography>
        <Divider />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          spec
        </Typography>
        <Typography variant="body2">
          <Skeleton itemType="text" width={50}/>
        </Typography>
        <Typography variant="body2">
          <Skeleton itemType="text" width={50}/>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Pokemon
