import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import Lists from "../../data/NavLists";
import ListItem from "@mui/material/ListItem";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

type MobileNavProps = {
  desktop: boolean;
  navToggle: boolean;
  handleCloseNav: () => void;
};

function MobileNav({ navToggle, desktop, handleCloseNav }: MobileNavProps) {
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
          className="icon-btn"
          aria-label="Menu Icon"
          onClick={handleCloseNav}
        >
          <CloseIcon />
        </IconButton>

        <Box>
          <Link
            to="/"
            style={{
              fontWeight: 800,
              fontSize: "1.2rem",
              color: "var(--clr-dark)",
            }}
          >
            <span
              style={{
                fontStyle: "italic",
              }}
            >
              S
            </span>
            neaker
            <span
              style={{
                color: "var(--clr-accent)",
              }}
            >
              s
            </span>
          </Link>
        </Box>
      </Stack>
      {Lists.map((list) => (
        <ListItem key={list.list} disablePadding>
          <Link to={list.link} className="nav-link">
            <ListItemButton
              sx={{
                paddingLeft: "0.7rem",
              }}
            >
              <ListItemText primary={list.list} />
            </ListItemButton>
          </Link>
        </ListItem>
      ))}
    </List>
  );
}

export default MobileNav;
