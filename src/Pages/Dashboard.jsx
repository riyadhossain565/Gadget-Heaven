import React from "react";

const Dashboard = () => {
  return (
    <div>
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
          <button
            className="text-lg text-purple-600 px-10 py-2 bg-white rounded-full hover:bg-purple-600 hover:text-white"
            onClick={() => handleMarkAsRead(bookId)}
          >
            Cart
          </button>
          <button
            className="text-lg bg-purple-500 text-white px-10 py-2 rounded-full border hover:text-purple-600 hover:bg-white"
            onClick={() => handleAddToWish(bookId)}
          >
            WishList
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
