import { useRouter } from 'next/router'

import {
  useRecoilState,
  useSetRecoilState
} from "recoil"

import {
  isOpenNav
} from "@/recoil/global"

import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { memo } from 'react';

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
      </List>
    </Drawer>
  )
}

type LinkProps = {
  label: string
  linkTo: string
}

const LinkBtn : React.FC<LinkProps> = memo(({label, linkTo}) => {
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
})

export default Nav