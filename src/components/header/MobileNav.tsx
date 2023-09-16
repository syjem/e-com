import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import Lists from "../../data/Lists";

type MobileNavProps = {
  navToggle: boolean;
  desktop: boolean;
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
          aria-label="Menu Icon"
          onClick={handleCloseNav}
        >
          <CloseIcon />
        </IconButton>

        <Box>
          <Link
            to="/"
            style={{
              fontSize: "1.2rem",
              color: "var(--clr-dark)",
              fontWeight: 800,
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
