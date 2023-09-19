import Stack from "@mui/material/Stack";
import Header from "../components/header/Header";
import useCustomHook from "../hooks/useCustomHook";
import DarkOnToggle from "../components/DarkOnToggle";
import AddToCart from "../components/products/AddToCartButton";
import ProductSlider from "../components/products/ProductSlider";
import ProductInformation from "../components/products/ProductInfo";

const HomePage = () => {
  const {
    desktop,
    addItem,
    cartItem,
    quantity,
    navToggle,
    minusItem,
    handleNavOpen,
    handleCloseNav,
    handleAddToCart,
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
      <Stack
        className="main"
        justifyContent="center"
        direction={desktop ? "row" : "column"}
        alignItems={desktop ? "flex-start" : "center"}
      >
        <ProductSlider />
        <Stack>
          <ProductInformation />
          <AddToCart
            addItem={addItem}
            quantity={quantity}
            minusItem={minusItem}
            handleAddToCart={handleAddToCart}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default HomePage;
