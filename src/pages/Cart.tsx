import Stack from "@mui/material/Stack";
import DarkOnToggle from "../components/DarkOnToggle";
import Header from "../components/header/Header";
import useCustomHook from "../hooks/useCustomHook";
import EmptyCart from "../components/cart/EmptyCart";
import "../scss/_cart-page.scss";
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
        {cartItem ? <FilledCart cartItem={cartItem} /> : <EmptyCart />}
      </Stack>
    </>
  );
}

export default Cart;
