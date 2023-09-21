import "../../scss/_modal.scss";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import Typography from "@mui/material/Typography";

type ModalProps = {
  openModal: boolean;
  closeModal: () => void;
  handleDeleteItem: () => void;
};

const style = {
  p: 3,
  top: "50%",
  gap: "1.5rem",
  left: "50%",
  width: "90%",
  maxWidth: 400,
  boxShadow: 24,
  display: "flex",
  position: "absolute",
  flexDirection: "column",
  bgcolor: "background.paper",
  transform: "translate(-50%, -50%)",
};

function ConfirmationModal({
  openModal,
  closeModal,
  handleDeleteItem,
}: ModalProps) {
  return (
    <>
      <Modal
        open={openModal}
        className="modal"
        onClose={closeModal}
        aria-labelledby="modal-confirmation"
        aria-describedby="modal-delete-or-cancel"
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModal}>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Are you sure to delete this item?
            </Typography>
            <Stack gap={2} direction="row">
              <Button
                variant="outlined"
                onClick={closeModal}
                className="cancel-btn"
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={handleDeleteItem}
                className="delete-btn"
              >
                Delete
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default ConfirmationModal;
