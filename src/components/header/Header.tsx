import Stack from "@mui/material/Stack";

import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import MenuXLogo from "./MenuXLogo";
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
        justifyContent="space-between"
        alignItems="center"
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

        <CartXAvatar desktop={desktop} quantity={cartItem} />
      </Stack>
    </header>
  );
}

export default Header;
