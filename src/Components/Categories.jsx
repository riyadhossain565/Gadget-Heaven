import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="grid gap-2 border p-4 rounded-xl bg-white shadow-lg">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-6 py-2 border rounded-full bg-[#09080F0D] ${
            isActive ? "bg-purple-500" : ""
          }`
        }
      >
        All Products
      </NavLink>
      {categories.map((category) => (
        <NavLink
          to={`/gadget/${category.category}`}
          className={({ isActive }) =>
            `px-3 lg:px-6 py-2 border rounded-full bg-[#09080F0D] ${
              isActive ? "bg-purple-500" : ""
            }`
          }
          key={category.category}
          role="tab"
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
