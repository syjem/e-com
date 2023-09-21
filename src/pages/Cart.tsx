import "../scss/_cart-page.scss";
import Stack from "@mui/material/Stack";
import Header from "../components/header/Header";
import useCustomHook from "../hooks/useCustomHook";
import EmptyCart from "../components/cart/EmptyCart";
import DarkOnToggle from "../components/DarkOnToggle";
import FilledCart from "../components/cart/FilledCart";

function Cart() {
  const cartConfig = {
    key: "cartItem",
    initialValue: 0,
  };

  const {
    desktop,
    cartItem,
    navToggle,
    setCartItem,
    handleNavOpen,
    handleCloseNav,
    showDarkOnToggle,
  } = useCustomHook(cartConfig);

  return (
    <>
      {showDarkOnToggle && <DarkOnToggle handleCloseNav={handleCloseNav} />}
      <Header
        desktop={desktop}
        cartItem={cartItem}
        navToggle={navToggle}
        handleNavOpen={handleNavOpen}
        handleCloseNav={handleCloseNav}
        showDarkOnToggle={showDarkOnToggle}
      />
      <Stack className="main cart">
        {cartItem ? (
          <FilledCart cartItem={cartItem} setCartItem={setCartItem} />
        ) : (
          <EmptyCart />
        )}
      </Stack>
    </>
  );
}

export default Cart;
