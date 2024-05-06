import React from "react";

const ClientGrid = ({ image, about, name, profile }) => {
  return (
    <div className="bg-slate-200 px-6 py-8 flex justify-center items-center flex-col gap-4 rounded-lg">
      <img src={image} alt="image" className="w-32 h-32" />
      <p className="text-center text-[17px] text-gray-600">{about}</p>
      <h1 className="text-center text-green-700 font-semibold text-2xl">
        {name}
      </h1>
      <p className="text-center text-[17px] text-gray-700">{profile}</p>
    </div>
  );
};

export default ClientGrid;
