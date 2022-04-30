import {
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import React from "react";
import { Link } from "react-router-dom";
import PlusOneIcon from "@mui/icons-material/PlusOne";
import ListIcon from "@mui/icons-material/List";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import PeopleIcon from "@mui/icons-material/People";
import MuiDrawer from "@mui/material/Drawer";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

function SideBar(props) {
  const { open, toggleDrawer } = props;
  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        <ListItemButton component={Link} to="/">
          <ListItemIcon>
            <PlusOneIcon />
          </ListItemIcon>
          <ListItemText primary="Counter" />
        </ListItemButton>
        <ListItemButton component={Link} to="/todos">
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary="Todos" />
        </ListItemButton>
        <ListItemButton component={Link} to="/users">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItemButton>
        <ListItemButton component={Link} to="/albums">
          <ListItemIcon>
            <PhotoCameraIcon />
          </ListItemIcon>
          <ListItemText primary="Albums" />
        </ListItemButton>
      </List>
    </Drawer>
  );
}

export default SideBar;
