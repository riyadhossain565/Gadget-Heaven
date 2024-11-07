import { toast } from "react-toastify";

// get all product from local storage
const getAllCart = () => {
  const storedCardStr = localStorage.getItem("cart-list");

  if (storedCardStr) {
    const storedCart = JSON.parse(storedCardStr);
    return storedCart;
  } else {
    return [];
  }
};

//  add product to local storage
const addCart = (product) => {
  // get all previously saved product data
  const storedCart = getAllCart();

  const isExist = storedCart.find(
    (item) => item.product_id == product.product_id
  );
  if (isExist) return toast.error("Already exists to the Cart");
  storedCart.push(product);
  localStorage.setItem("cart-list", JSON.stringify(storedCart));
  toast.success("successfully added to the Cart");
};

// get all product from local storage
const getAllWishList = () => {
  const storedWishListStr = localStorage.getItem("wish-list");

  if (storedWishListStr) {
    const storedWishList = JSON.parse(storedWishListStr);
    return storedWishList;
  } else {
    return [];
  }
};

//  add product to local storage
const addWishList = (product) => {
  // get all previously saved product data
  const storedWishList = getAllWishList();

  const isExist = storedWishList.find(
    (item) => item.product_id == product.product_id
  );
  if (isExist) return toast.error("Already exists to the Wish-List");
  storedWishList.push(product);
  localStorage.setItem("wish-list", JSON.stringify(storedWishList));
  toast.success("successfully added to the Wish-List");
};

export { addCart, getAllCart, getAllWishList, addWishList };
