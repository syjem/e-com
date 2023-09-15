import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";

function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Routes;
