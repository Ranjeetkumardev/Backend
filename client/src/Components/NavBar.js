import React from "react";
import { Link } from "react-router-dom";
import whiteLogo from "../img/logo-white.png";
const NavBar = () => {
  return (
    <div className="flex items-center justify-between bg-green-800 p-4 z-10 shadow-lg">
      <div className="img">
        <img src={whiteLogo} alt="Logo" className="h-8 mr-4 ml-4" />
      </div>
      <ul className="flex space-x-4 mr-10">
        <li className="text-white text-lg hover:bg-gray-600 p-2 rounded-md">
          Home
        </li>
        <li className="text-white text-lg hover:bg-gray-600 p-2 rounded-md">
           Services
        </li>
        <li className="text-white text-lg hover:bg-gray-600 p-2 rounded-md">
          About
        </li>
        <li className="text-white text-lg hover:bg-gray-600 p-2 rounded-md">
          Contact Us
        </li>
      </ul>
      <div className="flex border border-gray-200 py-2 mx-2 rounded-sm mr-10 hover:bg-gray-600">
        <span>
          <img
            className="w-8 mx-2 rounded-full"
            alt="user"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUzmQxwKnYnWrAuIfaKoy_ojWhGy0-KZlH7fOkAU5WMH2D2OGafm6wsSSR0LJW--Es064&usqp=CAU"
          />
        </span>
        <Link to="/login">
         
          <span className="mr-3 font-medium text-white ">Login</span> 
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
