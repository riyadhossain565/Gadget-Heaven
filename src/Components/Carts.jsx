import { useEffect, useState } from "react";
import { getAllCart } from "../utils";
import Cart from "./Cart";
import purchaseImg from "../assets/Group.png";
import { useNavigate } from "react-router-dom";

const Carts = () => {
  //state
  const [cartList, setCartList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const navigateHome = useNavigate();

  useEffect(() => {
    const cart = getAllCart();
    setCartList(cart);
  }, []);

  useEffect(() => {
    const newTotal = cartList.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(newTotal);
  }, [cartList]);

  const handleSort = () => {
    const sorted = [...cartList].sort((a, b) => b.price - a.price);
    setCartList(sorted);
  };

  const handlePurchase = () => {
    setShowModal(true);
  };

  const closePurchase = () => {
    localStorage.removeItem("cart-list");
    setCartList([]);
    setTotalPrice(0);
    setShowModal(false);
    navigateHome("/");
  };

  return (
    <div>
      <div className="bg-[#09080F0D] py-4">
        <div className="w-3/4 mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold">Cart</h1>
          <div className="flex flex-col gap-2 items-center md:flex-row">
            <span className="font-bold">Price: {totalPrice}</span>
            <button
              onClick={handleSort}
              disabled={cartList.length === 0}
              className="font-bold rounded-full px-5 py-2 mx-2 text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white"
            >
              Short By Price
            </button>
            <button
              onClick={handlePurchase}
              disabled={cartList.length === 0}
              className="font-bold rounded-full px-5 py-2 text-white bg-purple-600 hover:bg-white hover:text-purple-600"
            >
              Purchase
            </button>
          </div>
        </div>
        <div className="w-3/4 mx-auto">
          {cartList.length ? (
            cartList.map((cart) => <Cart key={cart.product_id} cart={cart} />)
          ) : (
            <p>No items in the cart.</p>
          )}
        </div>
      </div>

      {/* modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/4">
            <img className="mx-auto" src={purchaseImg} alt="" />
            <h3 className="text-xl font-bold my-2 text-center">
              Payment Successfully
            </h3>
            <p className="text-center">Thanks for purchasing</p>
            <p className="text-center my-2">Price: {totalPrice}</p>
            <div className="">
              <button
                onClick={closePurchase}
                className="py-2 bg-gray-300 text-black rounded-full mr-2 w-full hover:bg-purple-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carts;
