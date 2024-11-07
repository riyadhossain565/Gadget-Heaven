import { addCart } from "../utils";

const WishList = ({ cart }) => {
  const { product_title, product_image, description, price } = cart;

  const handleCart = (cart) => {
    addCart(cart);
  };
  return (
    <div>
      <div className="flex justify-between p-3 md:p-0 border rounded-xl my-4 bg-white">
        <div className="flex flex-col lg:flex-row">
          <img
            className="w-30 lg:w-52 h-60 lg:h-40 object-cover scale-75"
            src={product_image}
            alt="Image"
          />
          <div>
            <h2 className="font-bold text-lg mt-3">{product_title}</h2>
            <p>
              <span className="font-bold">Description: </span>
              {description}
            </p>
            <span className="font-bold my-2 text-lg">Price: $ {price}</span>
            <button
              // disabled={isStored}
              onClick={() => handleCart(cart)}
              className="flex gap-3 px-5 py-1 mt-2 font-bold bg-purple-600 text-white rounded-full"
            >
              Add to Cart
            </button>
          </div>
        </div>
        <button className="mr-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 border border-red-700 stroke-red-700 rounded-full "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default WishList;
