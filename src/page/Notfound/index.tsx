import NotFoundImage from "../../assets/not_Found_img.png";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <img
        src={NotFoundImage}
        alt="Not Found Image"
        className="w-60 h-60 max-w-[200px] max-h-[200px]"
      />
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-xl text-gray-600 mt-2">Page Not Found</p>
      <p className="text-s text-gray-400 mt-4">
        Sorry we could not find the page you are looking for
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-4 px-4 py-2 text-white rounded-xl bg-gradient-to-b from-blue-500 to-blue-600 hover:bg-gradient-to-t"
      >
        Go Home Page
      </button>
    </div>
  );
};

export default NotFound;
