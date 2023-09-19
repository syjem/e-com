import DarkOnToggle from "../components/DarkOnToggle";
import Header from "../components/header/Header";
import useCustomHook from "../hooks/useCustomHook";

function Cart() {
  const {
    desktop,
    cartItem,
    navToggle,
    handleNavOpen,
    handleCloseNav,
    showDarkOnToggle,
  } = useCustomHook();

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
    </>
  );
}

export default Cart;
