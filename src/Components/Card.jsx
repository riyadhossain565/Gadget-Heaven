import { NavLink } from "react-router-dom";

const Card = ({ gadget }) => {
  const { product_id, product_image, product_title, price } = gadget || {};

  return (
    <div className="p-4 border rounded-xl bg-white shadow-lg">
      <img
        className="w-60 h-44 object-cover rounded-lg border"
        src={product_image}
        alt=""
      />
      <h2 className="my-2 font-bold">{product_title}</h2>
      <p className="mb-2">Price: {price}</p>
      <NavLink
        to={`/products/${product_id}`}
        className="border border-purple-600 text-purple-600 font-bold rounded-full px-4 py-2 hover:bg-purple-600 hover:text-white"
      >
        View Details
      </NavLink>
    </div>
  );
};

export default Card;
