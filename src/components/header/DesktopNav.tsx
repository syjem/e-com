import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import Lists from "../../data/NavLists";

type DesktopNavProps = {
  desktop: boolean;
};

function DesktopNav({ desktop }: DesktopNavProps) {
  return (
    <List
      className="desktop-nav-menu"
      sx={{
        display: desktop ? "flex" : "none",
      }}
    >
      {Lists.map((list) => (
        <ListItem
          key={list.list}
          className="nav-list"
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "0 0.5rem",
          }}
        >
          <Link to={list.link} className="nav-link" key={list.list}>
            <ListItemText primary={list.list} />
          </Link>
        </ListItem>
      ))}
    </List>
  );
}

export default DesktopNav;
