import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addCart, addWishList, getAllCart } from "../utils";
import { Helmet } from "react-helmet-async";

const ProductDetails = () => {
  const data = useLoaderData();
  const { product_id } = useParams();
  const [product, setProduct] = useState({ Specification: [] });

  useEffect(() => {
    const singleData = data.find((product) => product.product_id == product_id);
    setProduct(singleData);
  }, [data, product_id]);

  // Handle Cart
  const handleCart = (product) => {
    addCart(product);
  };

  // Handle Wish List
  const handleWishList = (product) => {
    addWishList(product);
  };

  return (
    <div className="bg-[#09080F0D] relative lg:pb-96">
      <Helmet>
        <title>Product Details | Gadget Heaven</title>
      </Helmet>
      <div>
        <div className=" bg-purple-500 py-8 lg:pb-40 text-center mb-2">
          <h1 className="text-4xl font-bold px-10 lg:px-28 text-white">
            Product Details
          </h1>
          <p className="px-10 mt-4 text-white">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices <br />
            to the coolest accessories, we have it all!
          </p>
        </div>
      </div>

      <div className="w-5/6 lg:w-3/5 mx-auto bg-white rounded-xl lg:absolute left-64 top-40">
        <div className="flex gap-6 p-4  justify-center items-start flex-col lg:flex-row">
          <div>
            <img
              src={product.product_image}
              className="w-96 h-[420px] scale-x-100 scale-y-75 rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold">{product.product_title}</h1>
            <p className="font-bold py-2">Price:$ {product.price}</p>
            <div className="badge p-3 bg-green-200/30 text-green-600 border-green-700 border">
              In Stoke
            </div>
            <p className="py-3">{product.description}</p>
            <p className="font-bold">Specification:</p>
            <ol className="list-decimal ml-4">
              {product.Specification.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ol>
            <p className="font-bold py-2">Rating</p>
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-yellow-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-yellow-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-yellow-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-yellow-500"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-yellow-500"
              />
              <span className="bg-gray-200 font-bold px-4  rounded-full ml-2">
                {product.rating}
              </span>
            </div>
            <div className=" flex lg:gap-4 py-2">
              <button
                onClick={() => handleCart(product)}
                className="flex gap-3 px-4 py-2 font-bold bg-purple-600 text-white rounded-full"
              >
                Add to Cart
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
              </button>
              <button
                onClick={() => handleWishList(product)}
                className="border p-2 rounded-full"
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
