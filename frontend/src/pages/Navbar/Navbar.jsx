import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link, NavLink } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Saira Condensed",
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
  },
});

const pages = ["HOME", "PRICING", "CONTACT", "ABOUT"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "rgba(0,0,0,0.8)",
        }}
        style={{ top: "0", zIndex: "100" }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {/* Logo (Desktop only) */}
            <Box
              variant="h6"
              component="a"
              href="#"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
              }}
            >
              <Box
                component="img"
                src="/images/BS_TUNE_LOGO.png"
                style={{ width: "100px" }}
              />
            </Box>

            {/* Mobile menu */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {/* {pages.map((page) => (  ))} */}
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/home"
                    >
                      HOME
                    </Link>
                  </Typography>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    <NavLink
                      style={{ textDecoration: "none", color: "black" }}
                      to="/pricing"
                    >
                      PRICING
                    </NavLink>
                  </Typography>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    <NavLink
                      style={{ textDecoration: "none", color: "black" }}
                      to="/contact"
                    >
                      CONTACT
                    </NavLink>
                  </Typography>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    <NavLink
                      style={{ textDecoration: "none", color: "black" }}
                      to="/about"
                    >
                      ABOUT
                    </NavLink>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>

            {/* Logo for mobile */}
            <Box
              variant="h5"
              component="a"
              href="#"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
              }}
            >
              <Box
                component="img"
                src="/images/BS_TUNE_LOGO.png"
                style={{ width: "130px" }}
              />
            </Box>

            {/* Navigation links (Desktop only) */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {/* {pages.map((page) => ( ))} */}
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/home"
                >
                  HOME
                </Link>
              </Button>

              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  to="/pricing"
                >
                  PRICING
                </NavLink>
              </Button>

              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  to="/contact"
                >
                  CONTACT
                </NavLink>
              </Button>

              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  to="/about"
                >
                  ABOUT
                </NavLink>
              </Button>
            </Box>

            {/* Login button */}
            <Box sx={{ flexGrow: 0 }}>
              <Link to="/login">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "red",
                  color: "white",
                  "&:hover": { backgroundColor: "#d32f2f" },
                }}
              >
                LOGIN
              </Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;
