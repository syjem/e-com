import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Profile from "../../assets/image-avatar.png";
import Badge, { BadgeProps } from "@mui/material/Badge";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

type CartXAvatarProps = {
  desktop: boolean;
  cartItem: number;
};

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    top: 5,
    zIndex: 1,
    right: "-1px",
    padding: "0 2px",
    border: `2px solid ${theme.palette.background.paper}`,
  },
}));

function CartXAvatar({ desktop, cartItem }: CartXAvatarProps) {
  return (
    <Stack direction="row" alignItems="center" gap={desktop ? 2 : 1.5}>
      <Link
        to="/cart"
        style={{
          color: "black",
        }}
      >
        <IconButton aria-label="shopping cart" className="cart-btn">
          <StyledBadge badgeContent={cartItem} color="warning">
            <AddShoppingCartIcon fontSize={desktop ? "medium" : "small"} />
          </StyledBadge>
        </IconButton>
      </Link>
      <Avatar
        className="avatar"
        sx={{
          width: desktop ? 40 : 30,
          height: desktop ? 40 : 30,
        }}
        src={Profile}
        alt="User Avatar"
      />
    </Stack>
  );
}

export default CartXAvatar;
