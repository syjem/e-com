import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const Lists = ["Collections", "Men", "Women", "About", "Contacts"];

type MobileNavListProp = {
  navToggle: boolean;
  desktop: boolean;
  handleCloseNav: () => void;
};

function MobileNavList({
  navToggle,
  desktop,
  handleCloseNav,
}: MobileNavListProp) {
  return (
    <List
      className="mobile-nav-menu"
      sx={{
        transform: navToggle ? "translate(0)" : "translate(-1000px)",
        display: desktop ? "none" : "block",
      }}
    >
      <Stack direction="row" alignItems="center" gap={1}>
        <IconButton
          color="default"
          aria-label="Menu Icon"
          onClick={handleCloseNav}
        >
          <CloseIcon />
        </IconButton>

        <Box>Sneakers</Box>
      </Stack>
      {Lists.map((list) => (
        <ListItem key={list} disablePadding>
          <ListItemButton
            sx={{
              paddingLeft: "0.7rem",
            }}
          >
            <ListItemText primary={list} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default MobileNavList;
