import * as React from "react";
import "./listitems.css";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import HailIcon from "@mui/icons-material/Hail";
import RuleIcon from "@mui/icons-material/Rule";
import { Link } from "react-router-dom";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <Link to="/students">
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
    <ListItemButton>
      <Link to="/issuebooks">
        <ListItemIcon>
          <RuleIcon />
        </ListItemIcon>
        <ListItemText primary="Issue Books" />
      </Link>
    </ListItemButton>
  </React.Fragment>
);

// export const secondaryListItems = (
//   <React.Fragment>
//     <ListSubheader component="div" inset>
//       Saved reports
//     </ListSubheader>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItemButton>
//   </React.Fragment>
// );
