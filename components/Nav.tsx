import { useRouter } from 'next/router'

import {
  useRecoilState,
  useSetRecoilState
} from "recoil"

import {
  isOpenNav
} from "@/recoil/global"

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const Nav = ()=> {

  const [isOpen, setOpen] = useRecoilState(isOpenNav)

  return (
    <Drawer
      open={isOpen}
      onClose={() => setOpen(false)}
      onClick={() => setOpen(false)}
    >
      <List>
        <LinkBtn label="Top" linkTo="/"/>
        <LinkBtn label="Pokemons" linkTo="/pokemons"/>
        <LinkBtn label="LinariaSample" linkTo="/linaria"/>
        <LinkBtn label="Berries" linkTo="/berries/1"/>
      </List>
    </Drawer>
  )
}

type LinkProps = {
  label: string
  linkTo: string
}

const LinkBtn : React.FC<LinkProps> = ({label, linkTo}) => {
  const router = useRouter()

  return (
    <ListItem>
      <ListItemButton onClick={() => router.push(linkTo)}>
        <ListItemText>
          {label}
        </ListItemText>
      </ListItemButton>
    </ListItem>
  )
}

export default Nav