import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";

import { Link, NavLink, Route, Routes } from "react-router-dom";

const drawerWidth = 240;

import SiteImages from './pages/SiteImage/SiteImages';
import CreateUsers from './pages/CreateUsers/CreateUsers';
import Queries from './pages/Queries/Queries';
import UserData from "./pages/User&Data/UserData";
import NewArtist from "./pages/NewArtist/NewArtist";
import ArtistRelocation from "./pages/ArtistRelocation/ArtistRelocation";
import Revenue from "./pages/Revenue/Revenue";

function App() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            bgcolor: "#ff0000",
          }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              BSTUNE
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
            <Link to="/" style={{textDecoration:"none",color:"black"}}>
              <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <MailIcon />
                    </ListItemIcon>
                    <ListItemText>Site Images</ListItemText>
                  </ListItemButton>
                
              </ListItem>
              </Link>

              <NavLink to="/query" style={{textDecoration:"none",color:"black"}}>
              <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <MailIcon />
                    </ListItemIcon>
                    <ListItemText>Queries</ListItemText>
                  </ListItemButton>
              </ListItem>
              </NavLink>

              <NavLink to="/user" style={{textDecoration:"none",color:"black"}}>
              <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <MailIcon />
                    </ListItemIcon>
                    <ListItemText>Create User</ListItemText>
                  </ListItemButton>
              </ListItem>
              </NavLink>

              <NavLink to="/userData" style={{textDecoration:"none",color:"black"}}>
              <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <MailIcon />
                    </ListItemIcon>
                    <ListItemText>User Data</ListItemText>
                  </ListItemButton>
              </ListItem>
              </NavLink>

              <NavLink to="/artistRelocation" style={{textDecoration:"none",color:"black"}}>
              <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <MailIcon />
                    </ListItemIcon>
                    <ListItemText>Artist Relocation</ListItemText>
                  </ListItemButton>
              </ListItem>
              </NavLink>

              <NavLink to="/newArtist" style={{textDecoration:"none",color:"black"}}>
              <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <MailIcon />
                    </ListItemIcon>
                    <ListItemText>New Artist</ListItemText>
                  </ListItemButton>
              </ListItem>
              </NavLink>

              <NavLink to="/revenue" style={{textDecoration:"none",color:"black"}}>
              <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <MailIcon />
                    </ListItemIcon>
                    <ListItemText>Revenue</ListItemText>
                  </ListItemButton>
              </ListItem>
              </NavLink>

            </List>
          </Box>
        </Drawer>
        
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Routes>
            <Route path="/" element={<SiteImages />} />
            <Route path="/query" element={<Queries />} />
            <Route path="/user" element={<CreateUsers />} />
            <Route path="/userData" element={<UserData />} />
            <Route path="/newArtist" element={<NewArtist />} />
            <Route path="/artistRelocation" element={<ArtistRelocation />} />
            <Route path="/revenue" element={<Revenue />} />
          </Routes>
        </Box>
      </Box>
    </>
  );
}

export default App;
