import React from "react";
import { 
  Box, 
  Drawer,
  List, 
  ListItem, 
  ListItemText, 
  ListItemButton 
} from "@mui/material";

const Sidebar =({isSidebarOpen, handleDrawerToggle}) =>{
  const drawerWidth = 240;
  const navItems = ['Home', 'About', 'Contact'];

  const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
  );
    
  return(
        <>
        <Box component="nav">
          <Drawer variant="temporary"
              open={isSidebarOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
            >
            {drawer}
          </Drawer>
        </Box>
        </>
  )
}
export default Sidebar;