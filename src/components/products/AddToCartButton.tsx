import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Button, IconButton } from "@mui/material";
import "../../scss/_add-to-cart.scss";

type AddToCartProps = {
  quantity: number;
  minusItem: () => void;
  addItem: () => void;
  handleAddToCart: () => void;
};

function AddToCart({
  quantity,
  minusItem,
  addItem,
  handleAddToCart,
}: AddToCartProps) {
  return (
    <section className="add-to-cart-section">
      <div className="btn-group">
        <IconButton onClick={minusItem}>
          <RemoveIcon />
        </IconButton>
        <span>{quantity}</span>
        <IconButton onClick={addItem}>
          <AddIcon />
        </IconButton>
      </div>
      <Button
        className="cart-btn"
        variant="contained"
        onClick={handleAddToCart}
      >
        <AddShoppingCartIcon />
        Add to cart
      </Button>
    </section>
  );
}
export default AddToCart;
