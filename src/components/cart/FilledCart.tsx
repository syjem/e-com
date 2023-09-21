import "../../scss/_filled-items.scss";
import ConfirmationModal from "./Modal";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import React, { Dispatch, useState } from "react";
import IconButton from "@mui/material/IconButton";
import ProductItems from "../../data/ProductInfo";
import RemoveIcon from "@mui/icons-material/Remove";

import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";

type FilledCartProps = {
  cartItem: number;
  setCartItem: Dispatch<number>;
};

interface State extends SnackbarOrigin {
  open: boolean;
}

function FilledCart({ cartItem, setCartItem }: FilledCartProps) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openFeedback, setOpenFeedback] = useState<State>({
    open: false,
    vertical: "bottom",
    horizontal: "right",
  });

  const handleCloseFeedback = () => {
    setOpenFeedback({ ...openFeedback, open: false });
  };

  const handleCloseModal = () => setOpenModal(false);

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
    setOpenFeedback({ ...openFeedback, open: true });
  };

  // Feedback action
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseFeedback}
        className="close-icon"
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      {openModal && (
        <ConfirmationModal
          openModal={openModal}
          closeModal={handleCloseModal}
          handleDeleteItem={handleDeleteItem}
        />
      )}
      {openFeedback && (
        <Snackbar
          className="snackbar"
          open={openFeedback.open}
          autoHideDuration={5000}
          onClose={handleCloseFeedback}
          message="Item Deleted"
          action={action}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
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
