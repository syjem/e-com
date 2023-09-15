import { useEffect, useState } from "react";

import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";

import DarkOnToggle from "./DarkOnToggle";
import MobileNavList from "./MobileNavList";
import MenuXLogo from "./MenuXLogo";
import CartXAvatar from "./CartXAvatar";
import "../../scss/_header.scss";
import DesktopNavList from "./DesktopNavList";

function Header() {
  const [navToggle, setNavToggle] = useState<boolean>(false);
  const desktop = useMediaQuery("(min-width:600px)");

  const [showDarkOnToggle, setShowDarkOnToggle] = useState<boolean>(false);

  const handleNavOpen = () => {
    setNavToggle(true);
  };

  const handleCloseNav = () => {
    setNavToggle(false);
    setShowDarkOnToggle(false);
  };

  useEffect(() => {
    if (desktop) {
      setNavToggle(false);
      setShowDarkOnToggle(false);
    } else if (navToggle) {
      const timeoutId = setTimeout(() => {
        setShowDarkOnToggle(true);
      }, 150);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [desktop, navToggle]);

  return (
    <header className="header">
      {showDarkOnToggle && <DarkOnToggle handleCloseNav={handleCloseNav} />}

      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          width: "100%",
        }}
      >
        <Stack direction="row" gap={4}>
          <MenuXLogo handleNavOpen={handleNavOpen} desktop={desktop} />
          <DesktopNavList desktop={desktop} />
        </Stack>

        <MobileNavList
          navToggle={navToggle}
          desktop={desktop}
          handleCloseNav={handleCloseNav}
        />

        <CartXAvatar desktop={desktop} />
      </Stack>
    </header>
  );
}

export default Header;
