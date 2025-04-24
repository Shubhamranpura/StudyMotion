import React, { useEffect, useMemo, useState } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../../assets/Images/logonav.jpg";
import { NavbarLinks } from "../../../Exploremore_data/navbar-links";
import { FaCartShopping } from "react-icons/fa6";
import Userrole from "../../hooks/Userrole";

function Navbar() {
  const location = useLocation();
  const totalCartItems = useSelector((state) => state.cart.cart.length);
  const token = useSelector((state) => state.auth.token);
  const userdata = useSelector((state)=>state.profile.user)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const role = Userrole();
  const matchRoute = (route) => (route ? matchPath(route, location.pathname) : false);

  useEffect(() => {
    // console.log("Navbar rendered. Token:", token);
    console.log("User role in Navbar:", role);
  }, [token, role]);

  // Filter NavbarLinks based on role
  const filteredLinks = useMemo(() => {
    return NavbarLinks.filter((link) => {
      if (role === "instructor" && link.title === "Catalog") return false;
      if (role === "student" && link.title === "Add Course") return false;
      return true;
    });
  }, [role]);

 

  return (
    <div className="flex h-20 justify-center items-center border-b-2 border-[#2C333F] bg-[#000814] text-2xl">
      <div className="flex w-full max-w-screen-xl px-4 md:px-8 lg:px-12 justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-[60px] w-[200px] rounded-2xl" loading="lazy" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-x-7">
          <ul className="flex gap-x-7 text-3xl">
            {filteredLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className={
                    matchRoute(link.path)
                      ? "text-[#FFE83D]"
                      : "text-[#DBDDEA] hover:text-[#FFE83D] transition"
                  }
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Profile or Login/Signup */}
        <div className="hidden md:flex items-center">
          {token ? (
            <div className="flex items-center gap-8">
              <Link to="/dashboard" className="text-[#DBDDEA] hover:text-[#FFE83D]">
                <FaUserCircle size={40} />
              </Link>

              {role === "student" && (
                <div className="relative">
                  <Link to="/cart" className="text-[#DBDDEA] hover:text-[#FFE83D]">
                    <FaCartShopping size={38} />
                  </Link>
                  {totalCartItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm px-2 rounded-full">
                      {totalCartItems}
                    </span>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-4">
              <Link
                to="/login"
                className="text-[#DBDDEA] px-4 py-1 rounded-lg hover:bg-[#FFE83D] hover:text-black transition"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="text-[#DBDDEA] border-2 px-4 py-1 rounded-lg border-[#FFE83D] hover:bg-[#FFE83D] hover:text-black transition"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen((prev) => !prev)}>
            {isMenuOpen ? (
              <AiOutlineClose size={30} className="text-[#DBDDEA]" />
            ) : (
              <AiOutlineMenu size={30} className="text-[#DBDDEA]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#000814] z-50 flex flex-col items-center py-5 border-b-2 border-[#2C333F] md:hidden">
          <nav>
            <ul className="flex flex-col gap-5 text-lg">
              {filteredLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className={
                      matchRoute(link.path)
                        ? "text-[#FFE83D]"
                        : "text-[#DBDDEA] hover:text-[#FFE83D] transition"
                    }
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile User Profile or Login/Signup */}
          <div className="mt-4">
            {token  ? (
              <div className="flex flex-col items-center gap-3">
                <Link to="/dashboard" className="text-[#DBDDEA] hover:text-[#FFE83D]">
                  <FaUserCircle size={40} />
                </Link>

                {role === "student" && (
                  <div className="relative">
                    <Link to="/cart" className="text-[#DBDDEA] hover:text-[#FFE83D]">
                      <FaCartShopping size={38} />
                    </Link>
                    {totalCartItems > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm px-2 rounded-full">
                        {totalCartItems}
                      </span>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col gap-3 mt-3">
                <Link
                  to="/login"
                  className="text-[#DBDDEA] px-4 py-1 rounded-lg hover:bg-[#FFE83D] hover:text-black transition"
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  className="text-[#DBDDEA] border-2 px-4 py-1 rounded-lg border-[#FFE83D] hover:bg-[#FFE83D] hover:text-black transition"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
