import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Logo from "../../images/herb-empire-high-resolution-logo-color-on-transparent-background.png";
import { Link, NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // drawer menu
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"forestgreen"}
        fontFamily={"Great Vibes"}
        fontWeight={"bold"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <Link to={"/herb-empire-restaurant"}>
          <img src={Logo} alt="logo" height={"50"} width="200" />
        </Link>
      </Typography>
      <Divider />
      <ul className="mobile-nav">
        <li>
          <NavLink activeClassName="active" to={"/herb-empire-restaurant"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to={"/menu"}>
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to={"/about"}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to={"/contact"}>
            Contact
          </NavLink>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"forestgreen"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              fontFamily={"Great Vibes"}
              fontWeight={"bold"}
            >
              <Link to={"/herb-empire-restaurant"}>
                {" "}
                <img src={Logo} alt="logo" height={"70"} width="280" />
              </Link>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="nav-menu">
                <li>
                  <NavLink
                    activeClassName="active"
                    to={"/herb-empire-restaurant"}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to={"/menu"}>
                    Menu
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to={"/about"}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to={"/contact"}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
