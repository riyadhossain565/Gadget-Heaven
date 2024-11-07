import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Statistics from "../Pages/Statistics";
import GadgetCards from "../Components/GadgetCards";
import ProductDetails from "../Pages/ProductDetails";
import Carts from "../Components/Carts";
import WishCart from "../Components/WishCart";
import ErrorPage from "../Components/ErrorPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <GadgetCards></GadgetCards>,
            loader: () => fetch("../gadgets.json"),
          },
          {
            path: "/gadget/:category",
            element: <GadgetCards></GadgetCards>,
            loader: () => fetch("../gadgets.json"),
          },
        ],
      },

      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard",
            element: <Carts />,
          },
          {
            path: "/dashboard/wishlist",
            element: <WishCart />,
          },
        ],
      },
      {
        path: "/products/:product_id",
        element: <ProductDetails />,
        loader: () => fetch("../gadgets.json"),
      },
    ],
  },
]);

export default Routes;
