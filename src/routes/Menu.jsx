import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "../components/Home";
import Cart from "../features/ui/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/cart", element: <Cart /> },
]);

function Menu() {
  return <RouterProvider router={router} />;
}

export default Menu;
