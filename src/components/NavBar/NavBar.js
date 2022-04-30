import { IconButton, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import MuiAppBar from "@mui/material/AppBar";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const links = {
  "/": "Counter",
  "/todos": "Todos",
  "/users": "Users",
  "/albums": "Albums",
};

function NavBar(props) {
  const { open, toggleDrawer } = props;
  let { pathname } = useLocation();

  return (
    <AppBar position="absolute" open={open}>
      <Toolbar
        sx={{
          pr: "24px", // keep right padding when drawer closed
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: "36px",
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component={Link}
          variant="h6"
          style={{ textDecoration: "none" }}
          color="inherit"
          to={pathname}
          noWrap
          sx={{ flexGrow: 1 }}
        >
          {links[pathname]}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
