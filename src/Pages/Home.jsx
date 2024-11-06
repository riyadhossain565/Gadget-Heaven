import { Outlet, useLoaderData } from "react-router-dom";
import Heading from "../Components/Heading";
import Categories from "../Components/Categories";

const Home = () => {
  const categories = useLoaderData();

  return (
    <div className="bg-[#09080F0D]">
      {/* Header */}
      <div>
        <Heading
          title={"Upgrade Your Tech Accessorize with Gadget Heaven Accessories"}
          subtitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        />
      </div>
      <div className="mt-96 lg:mt-[500px]">
        <h1 className="text-center text-4xl font-bold">
          Explore Cutting-Edge Gadgets
        </h1>
      </div>
      <div className="flex gap-10 w-11/12 mx-auto px-4 py-8">
        <div>
          <Categories categories={categories}></Categories>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
