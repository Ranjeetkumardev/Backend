import React from "react";
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import Complan from "./Complan";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section className="w-full flex flex-col  lg:flex-row justify-between items-start text-white  bg-black px-10 py-12 gap-10 lg:gap-4 lg:px-16 lg:py-20 ">
      <div className="flex flex-col justify-center items-start gap-2 w-full lg:w-[50%]">
        <h1 className="text-green-600 font-bold text-4xl ">Full Stack</h1>
        <p className="text-lg text-slate-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, atque
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <div className="flex flex-col lg:flex-row justify-start  items-start w-full gap-4 ">
          <span className=" p-2 rounded-full cursor-pointer hover:bg-green-600">
            <Link to="https://www.linkedin.com/in/ranjeet-kumar-16a6111b4/">
              <FaLinkedin className="w-8 h-8" />
            </Link>
          </span>
          <span className=" p-2 rounded-full cursor-pointer hover:bg-green-600">
            <FaInstagram className="w-8 h-8" />
          </span>
          <span className=" p-2 rounded-full cursor-pointer hover:bg-green-600">
            <Link to="https://github.com/Ranjeetkumardev">
              <FaGithub className="w-8 h-8" />
            </Link>
          </span>
          <span className=" p-2 rounded-full cursor-pointer hover:bg-green-600">
            <FaFacebook className="w-8 h-8" />
          </span>
        </div>
      </div>
      <div className="w-[50%] px-8">
        <h1 className="text-2xl font-semibold text-green-600 mb-8">
          Give Us your FeedBack Here! 🙂
        </h1>
        <Complan />
      </div>
    </section>
  );
};

export default Footer;
