import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Helmet>
        <title>Dashboard | Gadgets Heaven</title>
      </Helmet>
      <div className=" bg-purple-500 py-8 text-center">
        <h1 className="text-4xl font-bold px-10 lg:px-28 text-white">
          Dashboard
        </h1>
        <p className="px-10 mt-4 text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices <br />
          to the coolest accessories, we have it all!
        </p>
        <div className="flex justify-center gap-5 my-2">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `text-lg px-12 py-2 border rounded-full ${
                isActive
                  ? "bg-purple-600 text-white"
                  : "bg-white text-purple-600"
              }`
            }
          >
            Cart
          </NavLink>

          <NavLink
            to="/dashboard/wishlist"
            className={({ isActive }) =>
              `text-lg px-10 py-2 rounded-full ${
                isActive
                  ? "bg-purple-600 text-white"
                  : "bg-white text-purple-600"
              }`
            }
          >
            Wish List
          </NavLink>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
