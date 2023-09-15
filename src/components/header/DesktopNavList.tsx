import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Lists = ["Collections", "Men", "Women", "About", "Contacts"];

type DesktopNavListProp = {
  desktop: boolean;
};

function DesktopNavList({ desktop }: DesktopNavListProp) {
  return (
    <List
      className="desktop-nav-menu"
      sx={{
        display: desktop ? "flex" : "none",
      }}
    >
      {Lists.map((list) => (
        <ListItem
          key={list}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "0 0.7rem",
          }}
        >
          <ListItemText primary={list} />
        </ListItem>
      ))}
    </List>
  );
}

export default DesktopNavList;
