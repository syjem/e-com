import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Profile from "../../assets/image-avatar.png";

type CartXAvatarProps = {
  desktop: boolean;
};

function CartXAvatar({ desktop }: CartXAvatarProps) {
  return (
    <Stack direction="row" alignItems="center" gap={desktop ? 2 : 1}>
      <IconButton color={"inherit"} aria-label="add to shopping cart">
        <AddShoppingCartIcon fontSize={desktop ? "medium" : "small"} />
      </IconButton>
      <Avatar
        sx={{
          width: desktop ? 40 : 30,
          height: desktop ? 40 : 30,
          marginRight: "0.5rem",
        }}
        src={Profile}
        alt="User Avatar"
      />
    </Stack>
  );
}

export default CartXAvatar;
