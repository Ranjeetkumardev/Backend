import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [iconToggle, setIconToggle] = useState(false);
  const [menuClass, setMenuClass] = useState("");
  const navigate = useNavigate();
  // const isAuth = isAuthenticated()
  const token = localStorage.getItem("token");
  const toggleMenu = () => {
    setToggle(!toggle);
  };
  const toggleIcon = () => {
    setIconToggle(!iconToggle);
  };
  const handleLogout = async () => {
    localStorage.removeItem("token");
    window.location.reload();
    // try {
    //   const response = await fetch("http://localhost:4000/logout", {
    //     method: "POST",
    //     // Include any necessary headers
    //     // headers: {
    //     //   "Content-Type": "application/json",
    //     // },
    //   });
    //   if (response.ok) {
    //     localStorage.removeItem("token");
    //       navigate("/");
    //   } else {
    //     throw new Error(await response.text());
    //   }
    // } catch (error) {
    //   console.error("Failed to logout:", error);
    // }
  };
  useEffect(() => {
    setMenuClass(
      toggle
        ? "transition-opacity ease-in-out duration-300 transform translate-y-0 opacity-100"
        : "transition-opacity ease-in-out duration-300 transform translate-y-full opacity-0"
    );
  }, [toggle]);
  return (
    <section className="w-full flex  justify-between items-center bg-black text-white px-8 py-6 lg:px-16 lg:py-6 sticky top-0 z-40">
      <h1 className="text-3xl font-mono text-green-600">Full Stack</h1>
      <div className="hidden lg:flex justify-end items-center gap-2">
        <ul className="flex justify-center items-center gap-3">
          <Link to="/">
            <li className="text-lg text-slate-100 cursor-pointer px-4 py-2 rounded-md hover:bg-green-600 hover:text-white">
              Home
            </li>
          </Link>
          <Link to="/service">
            <li className="text-lg text-slate-100 cursor-pointer px-4 py-2 rounded-md hover:bg-green-600 hover:text-white">
              Services
            </li>
          </Link>
          <Link to="/about">
            <li className="text-lg text-slate-100 cursor-pointer px-4 py-2 rounded-md hover:bg-green-600 hover:text-white">
              About Us
            </li>
          </Link>
          <Link to="/contact">
            <li className="text-lg text-slate-100 cursor-pointer px-4 py-2 rounded-md hover:bg-green-600 hover:text-white">
              Contact Us
            </li>
          </Link>
        </ul>
      </div>
      <div className="hidden lg:flex justify-end items-center gap-3">
        <span className=" p-2 rounded-full cursor-pointer">
          <FaRegUserCircle className="w-6 h-6" />
        </span>

        {token ? (
          <Link to="/" onClick={handleLogout}>
            <span className="text-lg text-slate-100 cursor-pointer px-4 py-2 rounded-md hover:bg-green-600 hover:text-white">
              LogOut
            </span>
          </Link>
        ) : (
          <Link to="/login">
            <span className="text-lg text-slate-100 cursor-pointer px-4 py-2 rounded-md hover:bg-green-600 hover:text-white">
              Login
            </span>
          </Link>
        )}
      </div>
      <div className="flex lg:hidden flex-col">
        {iconToggle ? (
          <IoCloseSharp
            width={40}
            height={40}
            onClick={() => {
              toggleMenu();
              toggleIcon();
            }}
          />
        ) : (
          <GiHamburgerMenu
            width={40}
            height={40}
            onClick={() => {
              toggleMenu();
              toggleIcon();
            }}
          />
        )}
        {toggle && (
          <div
            id="mob-menu"
            className={`bg-green-500 text-white py-4 absolute top-20 right-0 w-full ${menuClass}`}
          >
            <ul className="flex flex-col justify-center items-center gap-2 ">
              <Link to="/">
                <li className="text-xl text-white hover:bg-green-600 hover:text-white w-full py-3 text-center">
                  Home
                </li>
              </Link>
              <Link to="/about">
                <li className="text-xl text-white hover:bg-gree-600 hover:text-white w-full py-3 text-center">
                  About
                </li>
              </Link>
              <Link to="/service">
                <li className="text-xl text-white hover:bg-green-600 hover:text-white w-full py-3 text-center">
                  Servises
                </li>
              </Link>
              <Link to="/login">
                <li className="text-xl text-white hover:bg-green-600 hover:text-white w-full py-3 text-center">
                  Login
                </li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Header;
