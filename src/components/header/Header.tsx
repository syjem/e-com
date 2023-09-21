import MenuXLogo from "./MenuXLogo";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import Stack from "@mui/material/Stack";
import CartXAvatar from "./CartXAvatar";
import DarkOnToggle from "../DarkOnToggle";

import "../../scss/_header.scss";

type HeaderProps = {
  desktop: boolean;
  cartItem: number;
  navToggle: boolean;
  handleNavOpen: () => void;
  showDarkOnToggle: boolean;
  handleCloseNav: () => void;
};

function Header({
  desktop,
  cartItem,
  navToggle,
  handleNavOpen,
  handleCloseNav,
  showDarkOnToggle,
}: HeaderProps) {
  return (
    <header className="header">
      {showDarkOnToggle && <DarkOnToggle handleCloseNav={handleCloseNav} />}

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          width: "100%",
        }}
      >
        <Stack direction="row" gap={3}>
          <MenuXLogo handleNavOpen={handleNavOpen} desktop={desktop} />
          <DesktopNav desktop={desktop} />
        </Stack>

        <MobileNav
          desktop={desktop}
          navToggle={navToggle}
          handleCloseNav={handleCloseNav}
        />

        <CartXAvatar desktop={desktop} cartItem={cartItem} />
      </Stack>
    </header>
  );
}

export default Header;
