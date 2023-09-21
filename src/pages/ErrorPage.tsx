import "../scss/_error-page.scss";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useRouteError } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>{(error as { data?: string })?.data}</p>
      <p>
        <i>
          {(error as Error)?.message ||
            (error as { statusText?: string })?.statusText}
        </i>
      </p>

      <Link to="/">
        <Button className="shop-now-btn">
          <AddShoppingCartIcon fontSize="small" />
          Shop Now
        </Button>
      </Link>
    </div>
  );
}

export default ErrorPage;
