import { useBerryByName } from "@/api/berries"

import Card from '@mui/material/Card';
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

const Berry : React.FC<Props> = ({name}) => {

  const berry = useBerryByName(name)
  const router = useRouter()

  return (
    <Card sx={{ minWidth: 230 }}>
      <CardActions>
        <Button onClick={() => router.back()} size="small">Back</Button>
      </CardActions>
      <CardContent>
        <Typography variant="h5" component="div">
          {berry.name}
        </Typography>
        <Typography color="text.secondary">
          max harvest {berry.max_harvest}
        </Typography>
        <Divider/>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          size {berry.size}
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
      <CardContent>
        <Typography variant="h5" component="div">
          <Skeleton itemType="text"/>
        </Typography>
        <Typography color="text.secondary">
          <Skeleton itemType="text" width={50}/>
        </Typography>
        <Divider/>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          <Skeleton itemType="text" width={50}/>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Berry
