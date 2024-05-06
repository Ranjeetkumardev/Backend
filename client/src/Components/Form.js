import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { baseURL } from "../contrant/url";

const Form = () => {
  const [isloggedIn, setIsloggedIn] = useState(true);
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        isloggedIn ? `${baseURL}/login` : `${baseURL}/user`,
        {
          method: "post",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        localStorage.setItem("token", result.token);
        navigate("/");
        toast.success(
          isloggedIn
            ? "User logged in successfully!"
            : "User registered successfully!"
        );
        setFormData({ name: "", email: "", mobile: "", password: "" });
        setErrors([]);
        window.location.reload();
        // If successful, redirect to home page
      } else {
        // Handle error response
        throw new Error(await response.text());
      }
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed to log in or register");
      setErrors([err.message]);
    }
  };

  const toggleSignInForm = () => {
    setIsloggedIn(!isloggedIn);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-black text-green-600 px-10 py-12 rounded-lg justify-center items-start gap-4 w-full"
      >
        <h1 className="font-bold text-2xl py-4">
          {isloggedIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isloggedIn && (
          <>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Full Name"
              className="p-2 my-2 w-full rounded bg-gray-800"
              required
              minLength="3"
              maxLength="12"
            />
            <input
              type="tel"
              value={formData.mobile}
              onChange={(e) =>
                setFormData({ ...formData, mobile: e.target.value })
              }
              placeholder="Mobile No"
              className="p-2 my-2 w-full rounded bg-gray-800"
              pattern="[0-9]{10}"
              required
            />
          </>
        )}
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Email Address"
          className="p-2 my-2 w-full rounded bg-gray-800"
          required
        />
        <input
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          placeholder="Password"
          className="p-2 my-2 w-full rounded bg-gray-800"
          minLength="6"
          maxLength="12"
          required
        />
        {errors && <p className="text-red-500 w-full text-xl">{errors}</p>}
        <button
          type="submit"
          className="p-2 my-2 bg-green-600 text-white w-full rounded"
        >
          {isloggedIn ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm} className="cursor-pointer">
          {isloggedIn
            ? "New to Our website? Sign Up now"
            : "Already registered? Sign In Now"}
        </p>
      </form>

      <div>
        {errors === undefined
          ? errors
          : errors.map((error, index) => <div key={index}>{error.msg}</div>)}
      </div>
    </div>
  );
};

export default Form;
