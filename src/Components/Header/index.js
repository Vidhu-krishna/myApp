import React from "react";
import {AppBar, CssBaseline, Toolbar,IconButton, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import MenuNavigationItems from "../NavigationItems";

const Header = ({handleDrawerToggle}) =>{
    return(
        <>
          <CssBaseline />
          <AppBar component="nav">
          <Toolbar sx={{background: "linear-gradient(to bottom,#153460 0%,#275b8f 100%)"}}>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div">
              Department of Health & Services
            </Typography>
          </Toolbar>
          <MenuNavigationItems />
        </AppBar>
        </>
    )
}
export default Header;