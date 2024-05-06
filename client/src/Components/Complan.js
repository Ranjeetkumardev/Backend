import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Complan = () => {
  const [textData, setTextData] = useState({
    name: "",
    email: "",
    query: "",
  });

  const handleTextSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/feedback", {
        method: "POST",
        body: JSON.stringify(textData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        setTextData({
          name: "",
          email: "",
          query: "",
        });
        toast.success("Thanks for the Feedback 🥰 ");
       // alert("Thanks for the Feedback 🥰 ");
        window.location.reload();
      } else {
        console.error("Failed to submit data.");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <form
      onSubmit={handleTextSubmit}
      className="flex flex-col justify-center items-center gap-4 w-[80%]"
    >
      <input
        type="text"
        placeholder="Enter your name"
        value={textData.name}
        onChange={(e) => setTextData({ ...textData, name: e.target.value })}
        className="px-4 py-4 w-full border-2 border-green-500 rounded-lg text-black text-[18px] bg-slate-100 focus:border-green-600"
      />

      <input
        type="email"
        placeholder="Enter your email"
        value={textData.email}
        onChange={(e) => setTextData({ ...textData, email: e.target.value })}
        className="px-4 py-4 w-full border-2 border-green-500 rounded-lg text-[18px] text-black bg-slate-100  focus:outline-none focus:border-green-600"
      />

      <textarea
        className="px-4 py-4 w-full border-2 border-green-500 rounded-lg text-black text-[18px] focus:border-green-600"
        placeholder="Write Your Query Here.."
        value={textData.query}
        onChange={(e) => setTextData({ ...textData, query: e.target.value })}
      ></textarea>
      <button
        type="submit"
        className="bg-green-600 text-white p-4 w-full border-2 border-gray-500 rounded-lg text-[18px]"
      >
        SUBMIT
      </button>
    </form>
  );
};

export default Complan;
