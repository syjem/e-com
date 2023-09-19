import ProductItems from "../../data/ProductInfo";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import "../../scss/_filled-items.scss";

type FilledCartProps = {
  cartItem: number;
};

function FilledCart({ cartItem }: FilledCartProps) {
  const [localCartItem, setLocalCartItem] = useState(cartItem);

  const minusItem = () => {
    setLocalCartItem((prevItem) => prevItem - 1);
  };

  const addItem = () => {
    setLocalCartItem((prevItem) => prevItem + 1);
  };

  return (
    <>
      {ProductItems.map((item) => (
        <React.Fragment key={item.id}>
          <div className="cart-items">
            <div className="image-container">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="name-and-price">
              <h5 className="name">{item.name}</h5>
              <div className="justify-between">
                <span className="price">{item.price}</span>
                <div className="btn-group">
                  <IconButton onClick={minusItem} className="icon-btn">
                    <RemoveIcon fontSize="inherit" />
                  </IconButton>
                  <span className="quantity">{localCartItem}</span>
                  <IconButton onClick={addItem} className="icon-btn">
                    <AddIcon fontSize="inherit" />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
          <Button className="check-out-btn">Checkout</Button>
        </React.Fragment>
      ))}
    </>
  );
}

export default FilledCart;
