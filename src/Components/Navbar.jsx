import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const homePage = useLocation().pathname;
  return (
    <div className="bg-[#09080F0D] pt-2">
      <div
        className={`w-[95%] px-2  mx-auto ${
          homePage === "/"
            ? "rounded-t-md backdrop-blur-xl pt-2 mt-2 border-x border-t"
            : ""
        }`}
      >
        <div
          className={`navbar px-6  ${
            homePage === "/" ? "bg-purple-500 rounded-t-md" : ""
          }`}
        >
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box  z-50 mt-3 w-52 p-2 shadow"
              >
                <NavLink to="/">Home</NavLink>
                <NavLink to="/statistics">Statistics</NavLink>
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/contactus">contact Us</NavLink>
              </ul>
            </div>
            <NavLink
              className={`btn btn-ghost text-xl ${
                homePage === "/" ? "text-white" : ""
              }`}
            >
              Gadget Heaven
            </NavLink>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-6 ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `font-bold 
                ${isActive ? "text-purple-500" : "hover:text-purple-800"}
                ${homePage === "/" ? "text-white underline" : ""}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/statistics"
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-purple-500" : "hover:text-purple-800"
                  }
                  ${homePage === "/" ? "text-white" : ""}`
                }
              >
                Statistics
              </NavLink>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-purple-500" : "hover:text-purple-800"
                  }
                  ${homePage === "/" ? "text-white" : ""}`
                }
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/contactus"
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-purple-500" : "hover:text-purple-800"
                  }
                  ${homePage === "/" ? "text-white" : ""}`
                }
              >
                Contact Us
              </NavLink>
            </ul>
          </div>
          <div className="navbar-end gap-3">
            <NavLink
              to="/dashboard"
              className="border p-2 rounded-full bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </NavLink>
            <NavLink
              to="/dashboard/wishlist"
              className="border p-2 rounded-full bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
