import { Helmet } from "react-helmet-async";

const Statistics = () => {
  return (
    <div>
      <Helmet>
        <title>Statistics | Gadget Heaven</title>
      </Helmet>
      <div className=" bg-purple-500 py-8 text-center">
        <h1 className="text-4xl font-bold px-10 lg:px-28 text-white">
          Statistics
        </h1>
        <p className="px-10 mt-4 text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices <br />
          to the coolest accessories, we have it all!
        </p>
      </div>
    </div>
  );
};

export default Statistics;
