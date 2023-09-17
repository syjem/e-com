import Stack from "@mui/material/Stack";

import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import MenuXLogo from "./MenuXLogo";
import CartXAvatar from "./CartXAvatar";
import DarkOnToggle from "../DarkOnToggle";

import "../../scss/_header.scss";

type HeaderProps = {
  handleNavOpen: () => void;
  navToggle: boolean;
  desktop: boolean;
  handleCloseNav: () => void;
  showDarkOnToggle: boolean;
  cartItem: number;
};

function Header({
  handleNavOpen,
  desktop,
  navToggle,
  handleCloseNav,
  showDarkOnToggle,
  cartItem,
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
          navToggle={navToggle}
          desktop={desktop}
          handleCloseNav={handleCloseNav}
        />

        <CartXAvatar desktop={desktop} quantity={cartItem} />
      </Stack>
    </header>
  );
}

export default Header;
