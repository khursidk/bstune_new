import React, { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Drawer,
  CssBaseline,
  AppBar as MuiAppBar,
  Toolbar,
  List,
  Typography,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  GridView as GridViewIcon,
  Audiotrack as AudiotrackIcon,
  Paid as PaidIcon,
  ContactPage as ContactPageIcon,
  LibraryMusic as LibraryMusicIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import NewRelease from "./pages/Dashboard/NewRelease";
import Releases from "./pages/Dashboard/Releases";
import Artists from "./pages/Dashboard/Artists";
import Revenue from "./pages/Dashboard/Revenue";
import UserDashboard from "./pages/Dashboard/UserDashboard";
import SongDetails from "./pages/Dashboard/SongDetails";

const drawerWidth = 250;

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: open ? 0 : `-${drawerWidth}px`,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  borderRadius: "50px",
  height: 120,
  backgroundColor: "white",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
}));

const menuItems = [
  { text: "Dashboard", icon: <GridViewIcon sx={{color:"white"}}/>, link: "userDashboard" },
  { text: "Releases", icon: <LibraryMusicIcon sx={{color:"white"}}/>, link: "releases" },
  { text: "New Release", icon: <AudiotrackIcon sx={{color:"white"}}/>, link: "newRelease" },
  { text: "Artists", icon: <ContactPageIcon sx={{color:"white"}}/>, link: "artist" },
  { text: "Revenue", icon: <PaidIcon sx={{color:"white"}}/>, link: "revenue" },
];

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState("User");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const { name } = jwtDecode(token);
        setUserName(name || "User");
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/user/logout`);
      localStorage.removeItem("token");
      console.log("Logged out successfully");
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error.response || error.message);
    }
  };

  const toggleDrawer = () => setOpen((prev) => !prev);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar open={open}>
        <Toolbar sx={{ justifyContent: "center", alignItems: "center", marginTop: "25px" }}>
          <IconButton
            aria-label="open drawer"
            onClick={toggleDrawer}
            edge="start"
            sx={{
              mr: 2,
              mb: 3,
              display: open ? "none" : "block",
              position: "absolute",
              left: "50px",
              color: "black",
              padding: "10px",
              fontSize: "10px",
              borderRadius: "50%",
              '&:hover': {
                backgroundColor: "rgba(0, 0, 0, 0.08)", 
              }
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ textAlign: "center", mb: 3 }}>
            <span style={{ color: "black", fontWeight: "bold", fontSize: "30px" }}>WELCOME</span>
            <br />
            <span style={{ color: "#ff0000", fontWeight: "bold", fontSize: "30px" }}>{userName}</span>
          </Typography>
          <LogoutIcon
            sx={{
              color: "black",
              position: "absolute",
              right: "50px",
              ml: 2,
              mb: 3,
              cursor: "pointer",
              borderRadius: "50%", 
              fontSize: "50px",
              padding: "10px",
              '&:hover': {
                backgroundColor: "rgba(0, 0, 0, 0.08)",
              }
            }}
            onClick={handleLogout}
          />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#ff0000",
            color: "white",
            borderRadius: "50px",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ bgcolor: "white" }} style={{ borderBottomRightRadius: "50px", borderBottomLeftRadius: "50px" }}>
          <Box component="img" src="/images/BS_TUNE_LOGO.png" sx={{ width: 190, height: 150 }} />
          <IconButton onClick={toggleDrawer}>
            {theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <List>
          {menuItems.map(({ text, icon, link }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton component={Link} to={link}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} sx={{ fontSize: "2rem", fontWeight: "bold" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Routes>
          <Route path="userDashboard" element={<UserDashboard />} />
          <Route path="newRelease" element={<NewRelease />} />
          <Route path="releases" element={<Releases />} />
          <Route path="artist" element={<Artists />} />
          <Route path="revenue" element={<Revenue />} />
          <Route path="releases/songDetails/:songId" element={<SongDetails />} />
        </Routes>
      </Main>
    </Box>
  );
}
