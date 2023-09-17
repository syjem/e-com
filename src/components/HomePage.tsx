import { useEffect, useState } from "react";
import DarkOnToggle from "./DarkOnToggle";
import Header from "./header/Header";
import ProductSlider from "./products/ProductSlider";
import AddToCart from "./products/AddToCartButton";

import useMediaQuery from "@mui/material/useMediaQuery";
import ProductInformation from "./products/ProductInfo";

const HomePage = () => {
  const [navToggle, setNavToggle] = useState<boolean>(false);
  const desktop = useMediaQuery("(min-width:600px)");
  const [showDarkOnToggle, setShowDarkOnToggle] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(0);
  const [cartItem, setCartItem] = useState<number>(0);

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

  // Carts
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

  return (
    <>
      <Header
        handleNavOpen={handleNavOpen}
        desktop={desktop}
        handleCloseNav={handleCloseNav}
        navToggle={navToggle}
        showDarkOnToggle={showDarkOnToggle}
        cartItem={cartItem}
      />

      {showDarkOnToggle && <DarkOnToggle handleCloseNav={handleCloseNav} />}
      <ProductSlider />
      <ProductInformation />
      <AddToCart
        quantity={quantity}
        minusItem={minusItem}
        addItem={addItem}
        handleAddToCart={handleAddToCart}
      />
    </>
  );
};

export default HomePage;
