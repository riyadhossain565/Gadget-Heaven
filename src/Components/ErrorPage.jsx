import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import errorImg from "../assets/404.webp";

const ErrorPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>404 Error Page</title>
      </Helmet>
      <div className="m-6 text-center">
        <h2 className="text-5xl text-red-600">404 Page Not Found!!!</h2>
        <p className="text-xl mt-2">
          Go to{" "}
          <Link to="/" className="text-blue-800 underline">
            Home
          </Link>
        </p>
        <img className="mx-auto" src={errorImg} alt="" />
      </div>
    </HelmetProvider>
  );
};

export default ErrorPage;
