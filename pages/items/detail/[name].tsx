import { useRouter } from 'next/router'

import BerryDetail, {Loading} from "@/components/BerryDetail"
import SuspenseOrNotReady from '@/components/SuspenseOrNotReady'
import Container from '@mui/material/Container'
import { PokeAPI } from 'pokeapi-types'
import { GetServerSideProps } from 'next'
import { Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from '@mui/material'



const Detail: React.FC<ServerSideProps> = ({item}) => {

  const router = useRouter()

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Card sx={{ minWidth: 230 }}>
        <CardActions>
          <Button onClick={() => router.back()} size="small">Back</Button>
        </CardActions>
        <CardMedia
          component="img"
          height="200"
          image={item.sprites.default}
          alt={item.name}
          sx={{objectFit: "none"}}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {item.name}
          </Typography>
          <Divider/>
          <Typography sx={{ fontSize: 14 }} color="text.secondary">
            price {item.cost}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}

type ServerSideProps = {
  item: PokeAPI.Item
}

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async (context) => {

  const name = String(context.params?.name)

  const res = await fetch(`https://pokeapi.co/api/v2/item/${name}`).then(res => {
    return new Promise<any>(resolve => {
      setTimeout(() => resolve(res), 3000)
    })
  })

  return {
    props: {
      item: await res.json() as PokeAPI.Item
    }
  }
}

export default Detail
