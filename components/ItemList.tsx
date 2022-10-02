import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Pagination from '@mui/material/Pagination';
import Skeleton from '@mui/material/Skeleton';
import { Stack } from '@mui/material';
import Link from 'next/link'

type Props = {
  itemList: Item[]
  isLoading: boolean
  itemPath: string
}

type Item = {
  name: string
}

const ItemList = ({
  itemList,
  isLoading = false,
  itemPath
}: React.PropsWithChildren<Props>) => {

  if (isLoading) {
    return (
      <Loading></Loading>
    )
  }

  return (
    <Stack alignItems={"center"}>
      <List>
        {itemList.map(item => (
          <ListItem key={item.name} style={{width: "100%"}}>
            <Link href={`/${itemPath}/${item.name}`} passHref>
              <ListItemButton>
                <ListItemText>
                  {item.name}
                </ListItemText>
              </ListItemButton>
            </Link>
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

export default ItemList