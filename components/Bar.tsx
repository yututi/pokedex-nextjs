import { memo, useState } from 'react';

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

const Bar : React.FC = memo(() => {

  const setOpen = useSetRecoilState(isOpenNav)

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
      <Nav></Nav>
    </>
  );
})

export default memo(Bar)
