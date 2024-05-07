import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
const Header = () => {
  return (
    <div className="flex justify-between bg-green-100 w-full h-[80px] font-bold">
      <img src={logo} className="w-17 h-16 m-2"></img>
      <div className="flex justify-between p-4 m-4">
        <div className="px-4">Help</div>
        <div className="px-4">User</div>
        <div className="px-4">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 border border-blue-500 hover:border-transparent rounded">
            <Link to="signin">Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
