import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import pageIconSVG from "../../assets/logo/remove.png";

export default function Header() {
  return (
    <header className="bg-white p-3 lg:px-5 2xl:container 2xl:mx-auto">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="cursor-pointer text-2xl font-bold text-blue-600"
        >
          <img src={pageIconSVG} alt="" style={{ width: 45, height: 45 }} />
        </Link>

        {/* Search Bar */}
        <div className="relative hidden w-1/3 lg:block">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-full border px-4 py-2 pl-10 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <FaSearch className="absolute top-3 left-3 text-gray-500" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden space-x-6 font-medium text-gray-700 md:flex">
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
        <div className="hidden items-center space-x-4 lg:flex">
          <FaShoppingCart className="cursor-pointer text-2xl text-gray-700 hover:text-blue-600" />
          <button className="cursor-pointer rounded border border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white">
            Sign In
          </button>
          <button className="cursor-pointer rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Login
          </button>
        </div>
        <CiMenuFries size={25} className="lg:hidden" />
      </div>
    </header>
  );
}
