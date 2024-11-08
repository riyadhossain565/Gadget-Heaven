# Gadget Heaven - Your go-to destination for the latest and greatest gadgets

live link

## Requirement Document Link

https://github.com/ProgrammingHero1/B10-A8-gadget-heaven/blob/main/Batch-10_Assignment-08.pdf

## List of React Fundamentals used in this project

1. **React Router**: Navigation is handled with react-router-dom through NavLink and Outlet, providing a multi-page experience without reloading the page. Dynamic routing with parameters (using useParams) allows content to change based on the current route.
2. **Functional Components**: Components are built as functions that accept props and return JSX to define the UI structure, making components reusable and modular.
3. **State Management with useState**: useState is used to manage component-specific states such as cartList, totalPrice, and showModal, enabling dynamic updates to the UI based on user interaction.
4. **Side Effects with useEffect**: useEffect hooks are utilized to perform side effects, such as fetching data from localStorage on initial render and recalculating the total price whenever the cart list updates.
5. **Props for Data Passing**: Components like Cart and Card receive data via props, allowing information to be passed down the component tree for modularity and reusability.

## Local Storage

-Local storage is used to persist data across page reloads and user sessions.

- **Cart Data**: The items in the cart are stored in local storage, enabling users to retain their cart items even after refreshing the page or returning later.

## Here are five key features of the project:

1. **Shopping Cart with Persistent Storage**: Users can add items to their cart, view total price, and remove items as needed.
2. **Wishlist Functionality**: The wishlist allows users to save items for later consideration. This separate list can be viewed and managed independently from the shopping cart, giving users flexibility in how they browse and save products.
3. **Dynamic Product Sorting**: Users can sort products by price to easily find the best deals or the most premium items.
4. **Purchase Confirmation Modal**: When users proceed to purchase items in their cart, a modal window appears to confirm their action.
5. **Responsive Design**: The layout and UI elements are optimized for a range of screen sizes, providing a seamless experience on both desktop and mobile devices.
