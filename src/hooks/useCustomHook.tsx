import { useState, useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

function useCustomHook() {
  const [quantity, setQuantity] = useState(0);
  const [cartItem, setCartItem] = useState(0);
  const [navToggle, setNavToggle] = useState(false);
  const desktop = useMediaQuery("(min-width:600px)");
  const [showDarkOnToggle, setShowDarkOnToggle] = useState(false);

  const handleCloseNav = () => {
    setNavToggle(false);
    setShowDarkOnToggle(false);
  };

  const handleNavOpen = () => {
    setNavToggle(true);
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

  const minusItem = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const addItem = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      setCartItem((prevQuantity) => prevQuantity + quantity);
    }
    setQuantity(0);
  };

  return {
    desktop,
    addItem,
    quantity,
    cartItem,
    minusItem,
    navToggle,
    handleNavOpen,
    handleCloseNav,
    handleAddToCart,
    showDarkOnToggle,
  };
}

export default useCustomHook;
