import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="m-6">
      <h2 className="text-5xl text-red-600">404 Page Not Found</h2>
      <p className="text-xl">
        Go to{" "}
        <Link to="/" className="text-blue-800 underline">
          Home
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;
