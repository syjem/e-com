import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

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
        Sneakers
      </Box>
    </Stack>
  );
}

export default MenuXLogo;
