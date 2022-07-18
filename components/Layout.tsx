import { useState } from 'react';
import { useRouter } from 'next/router'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

type Props = {
  children: React.ReactNode
}

const Layout : React.FC<Props> = (props) => {

  const [isOpen, setOpen] = useState(false)

  const router = useRouter()

  const routeWithClose = (path:string) => () => {
    setOpen(false)
    router.push(path)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Next.js Pokedex App
          </Typography>
        </Toolbar>
      </AppBar>
      {props.children}
      <Drawer
        open={isOpen}
        onClose={() => setOpen(false)}
      >
        <List>
        <ListItem>
            <ListItemButton onClick={routeWithClose("/")}>
              <ListItemText>
                Top
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={routeWithClose("/pokemons")}>
              <ListItemText>
                Pokemons
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}

export default Layout