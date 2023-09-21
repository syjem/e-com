import "../../scss/_filled-items.scss";
import ConfirmationModal from "./Modal";
import Button from "@mui/material/Button";
import { Dispatch, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import ProductItems from "../../data/ProductInfo";
import RemoveIcon from "@mui/icons-material/Remove";

type FilledCartProps = {
  cartItem: number;
  setCartItem: Dispatch<number>;
};

function FilledCart({ cartItem, setCartItem }: FilledCartProps) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleClose = () => setOpenModal(false);

  const totalPrice = 125 * cartItem;

  const minusItem = () => {
    cartItem > 1 ? setCartItem(cartItem - 1) : setOpenModal(true);
  };

  const addItem = () => {
    setCartItem(cartItem + 1);
  };

  const handleDeleteItem = () => {
    setCartItem(0);
    setOpenModal(false);
  };

  return (
    <>
      {openModal && (
        <ConfirmationModal
          openModal={openModal}
          closeModal={handleClose}
          handleDeleteItem={handleDeleteItem}
        />
      )}
      {ProductItems.map((item) => (
        <section className="cart-items-section" key={item.id}>
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
                  <span className="quantity">{cartItem}</span>
                  <IconButton onClick={addItem} className="icon-btn">
                    <AddIcon fontSize="inherit" />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
          <span className="total-price">{`Total: $${totalPrice}.00`}</span>
          <Button className="check-out-btn">Checkout</Button>
        </section>
      ))}
    </>
  );
}

export default FilledCart;
