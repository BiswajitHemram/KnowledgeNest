import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import pageIconSVG from "../assets/logo/remove.png";

export default function Header() {
  return (
    <header className="bg-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 cursor-pointer"
        >
          <img src={pageIconSVG} alt="" style={{ width: 55, height: 55 }} />
        </Link>

        {/* Search Bar */}
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <FaSearch className="absolute top-3 left-3 text-gray-500" />
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6 text-gray-700 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-blue-600 ${
                isActive ? "text-blue-600" : "text-gray-700"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/course"
            className={({ isActive }) =>
              `hover:text-blue-600 ${
                isActive ? "text-blue-600" : "text-gray-700"
              }`
            }
          >
            Course
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `hover:text-blue-600 ${
                isActive ? "text-blue-600" : "text-gray-700"
              }`
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/tech"
            className={({ isActive }) =>
              `hover:text-blue-600 ${
                isActive ? "text-blue-600" : "text-gray-700"
              }`
            }
          >
            Teach
          </NavLink>
        </nav>

        {/* Cart & Auth Buttons */}
        <div className="flex items-center space-x-4">
          <FaShoppingCart className="text-2xl text-gray-700 cursor-pointer hover:text-blue-600" />
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white cursor-pointer">
            Sign In
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}
