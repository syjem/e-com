import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Profile from "../../assets/image-avatar.png";

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
      <IconButton color={"inherit"} aria-label="add to shopping cart">
        <StyledBadge badgeContent={quantity} color="warning">
          <AddShoppingCartIcon fontSize={desktop ? "medium" : "small"} />
        </StyledBadge>
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
