import * as React from "react";
import "./listitems.css";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import HailIcon from "@mui/icons-material/Hail";
import { Link } from "react-router-dom";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <Link to="/">
        <ListItemIcon>
          <HailIcon />
        </ListItemIcon>
        <ListItemText primary="Students" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <Link to="/books">
        <ListItemIcon>
          <AutoStoriesIcon />
        </ListItemIcon>
        <ListItemText primary="Books" />
      </Link>
    </ListItemButton>
  </React.Fragment>
);
