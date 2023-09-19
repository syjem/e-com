import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function EmptyCart() {
  return (
    <div className="card">
      <p>Your cart is empty.</p>
      <Link to="/">
        <Button color="warning">
          <AddShoppingCartIcon fontSize="small" />
          Shop Now
        </Button>
      </Link>
    </div>
  );
}

export default EmptyCart;
