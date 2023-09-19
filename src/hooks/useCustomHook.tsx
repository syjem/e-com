import { useState, useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

type CustomHookProps = {
  key: string;
  initialValue: number | (() => number);
};

function useCustomHook({ key, initialValue }: CustomHookProps) {
  const [quantity, setQuantity] = useState(0);
  const [navToggle, setNavToggle] = useState(false);
  const desktop = useMediaQuery("(min-width:600px)");
  const [showDarkOnToggle, setShowDarkOnToggle] = useState(false);

  // Get Item on Local Storage
  const savedValue = localStorage.getItem(key);
  const parsedValue = savedValue ? JSON.parse(savedValue) : initialValue;
  const [cartItem, setCartItem] = useState(parsedValue);

  // Set Item on Local Storage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(cartItem));
  }, [key, cartItem]);

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
      setCartItem((cartItem: number) => cartItem + quantity);
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
