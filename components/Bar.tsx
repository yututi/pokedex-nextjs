import { memo, useEffect, useState } from 'react';

import {
  useSetRecoilState
} from "recoil"

import {
  isOpenNav
} from "@/recoil/global"

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Nav from "./Nav"
import { Fade, LinearProgress } from '@mui/material';
import { useRouter } from 'next/router';

const Bar : React.FC = () => {

  const setOpen = useSetRecoilState(isOpenNav)

  const router = useRouter()

  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    const start = () => {
      setLoading(true)
    }
    const end = () => {
      setLoading(false)
    }
    router.events.on('routeChangeStart', start)
    router.events.on('routeChangeComplete', end)
    return () => {
      router.events.off('routeChangeStart', start)
      router.events.off('routeChangeComplete', end)
    }
  })

  return (
    <>
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
      <Fade in={loading}>
        <LinearProgress  color="secondary" />
      </Fade>
      <Nav></Nav>
    </>
  );
}

export default memo(Bar)
