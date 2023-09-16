import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

type MenuXLogoProps = {
  handleNavOpen: () => void;
  desktop: boolean;
};

function MenuXLogo({ handleNavOpen, desktop }: MenuXLogoProps) {
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      <IconButton
        color="default"
        aria-label="Menu Icon"
        onClick={handleNavOpen}
        sx={{
          display: desktop ? "none" : "inherit",
        }}
      >
        <MenuIcon />
      </IconButton>
      <Box
        sx={{
          paddingLeft: desktop ? "0.5rem" : 0,
        }}
      >
        <Link
          to="/"
          style={{
            fontSize: "1.2rem",
            color: "var(--clr-dark)",
            fontWeight: 800,
            display: "flex",
            alignItems: "center",
            paddingBottom: "0.3rem",
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
  );
}

export default MenuXLogo;
