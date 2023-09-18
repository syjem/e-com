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
  quantity: number;
};

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: "-1px",
    top: 5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 2px",
    zIndex: 1,
  },
}));

function CartXAvatar({ desktop, quantity }: CartXAvatarProps) {
  return (
    <Stack direction="row" alignItems="center" gap={desktop ? 2 : 1.5}>
      <Link
        to="/cart"
        style={{
          color: "black",
        }}
      >
        <IconButton aria-label="shopping cart" className="cart-btn">
          <StyledBadge badgeContent={quantity} color="warning">
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
