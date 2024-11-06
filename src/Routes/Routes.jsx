import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Statistics from "../Pages/Statistics";
import GadgetCards from "../Components/GadgetCards";
import ProductDetails from "../Pages/ProductDetails";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
