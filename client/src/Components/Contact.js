import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhoneVolume,
  FaLocationDot,
} from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import Complan from "./Complan";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row justify-center items-center bg-slate-200  h-fit p-4 lg:p-20  ">
      <div className="flex flex-col lg:flex-row justify-center items-start w-full lg:w-3/4 gap-10 bg-white rounded-lg p-10 py-12  z-20">
        <div className=" w-full flex flex-col justify-center items-start gap-4 ">
          <h1 className="text-green-600 font-bold text-[35px]">Contact Info</h1>
          <div className=" justify-start items-start text-gray-600 font-semibold text-lg gap-4">
            <span className="rounded-full cursor-pointer ">
              <BiLogoGmail className="w-6 h-6 inline-block" />
            </span>
            <span className="mx-4">rkdev@gmail.com</span>
          </div>
          <div className=" justify-start items-start text-gray-600 font-semibold text-lg gap-4">
            <span className="rounded-full cursor-pointer ">
              <FaLocationDot className="w-6 h-6 inline-block" />
            </span>
            <span className="mx-4 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </span>
          </div>
          <div className=" justify-start items-start text-gray-600 font-semibold text-lg gap-4">
            <span className="rounded-full cursor-pointer ">
              <FaPhoneVolume className="w-6 h-6 inline-block" />
            </span>
            <span className="mx-4">+91 9608104568</span>
          </div>

          <div className="flex flex-col lg:flex-row justify-start items-start gap-4 mt-8 w-full">
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
        <Complan />
      </div>
    </section>
  );
};

export default Contact;
