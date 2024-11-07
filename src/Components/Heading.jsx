import { useNavigate } from "react-router-dom";

const Heading = ({ title, subtitle }) => {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <div className="w-[95%] px-2 pb-2 border-x border-b mx-auto rounded-b backdrop-blur-xl">
        <div className=" bg-purple-500 py-14 rounded-b pb-40 text-center">
          <h1 className="text-5xl font-bold px-10 lg:px-28 text-white">
            {title}
          </h1>
          <p className="px-10 mt-4 text-white">{subtitle}</p>
          <button
            onClick={() => {
              navigate("/dashboard");
            }}
            className="btn rounded-full px-8 font-bold text-xl my-4 text-purple-700"
          >
            Shop Now
          </button>
        </div>
      </div>
      <div className="w-5/6 lg:w-3/4 rounded-xl backdrop-blur-2xl p-4 border absolute left-10 top-[550px] lg:top-72 lg:left-44 ">
        <div className="hero bg-banner h-64 lg:h-[550px] object-cover rounded-xl"></div>
      </div>
    </div>
  );
};

export default Heading;
