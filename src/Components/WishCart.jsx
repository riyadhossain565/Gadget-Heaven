import { useEffect, useState } from "react";
import { getAllWishList } from "../utils";
import WishList from "./WishList";

const WishCart = () => {
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const wishList = getAllWishList();
    setWishList(wishList);
  }, []);
  return (
    <div>
      <div className="bg-[#09080F0D] py-4">
        <div className="w-3/4 mx-auto">
          <h1 className="text-2xl font-bold">Wish List</h1>
        </div>
        <div className="w-3/4 mx-auto">
          {wishList.length ? (
            wishList.map((cart) => (
              <WishList key={cart.product_id} cart={cart} />
            ))
          ) : (
            <p>No items in the cart.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishCart;
