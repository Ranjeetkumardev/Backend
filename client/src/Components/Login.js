import React from "react";
import Form from "./Form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
const Login = () => {
  return (
    <section className=" w-full flex flex-col lg:flex-row justify-center items-center bg-slate-300  h-fit  p-4 lg:py-00  ">
      <div className="w-[40%] h-[30%]">
        <Form />
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </section>
  );
};

export default Login;
