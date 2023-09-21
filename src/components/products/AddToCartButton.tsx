import "../../scss/_add-to-cart.scss";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

type AddToCartProps = {
  quantity: number;
  addItem: () => void;
  minusItem: () => void;
  handleAddToCart: () => void;
};

function AddToCart({
  addItem,
  quantity,
  minusItem,
  handleAddToCart,
}: AddToCartProps) {
  return (
    <section className="add-to-cart-section">
      <div className="btn-group">
        <IconButton onClick={minusItem} className="icon-btn">
          <RemoveIcon />
        </IconButton>
        <span>{quantity}</span>
        <IconButton onClick={addItem} className="icon-btn">
          <AddIcon />
        </IconButton>
      </div>
      <Button
        variant="contained"
        className="cart-btn"
        onClick={handleAddToCart}
      >
        <AddShoppingCartIcon />
        Add to cart
      </Button>
    </section>
  );
}
export default AddToCart;
