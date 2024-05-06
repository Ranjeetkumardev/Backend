import React from "react";
import { clients } from "../utils/export";
import ClientGrid from "../utils/ClientGrid";

const About = () => {
  return (
    <section className="w-full flex flex-col gap-5 h-fit p-7 lg:p-20px">
      <h1 className="text-green-600 font-bold text-5xl text-center leading-[68px] ">
        Our Clinets
      </h1>
      <p className="text-slate-900 text-center text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod obcaecati
        repellendus aut velit quibusdam ducimus sit, natus qui corrupti, libero
        laborum voluptatem corporis a eum esse doloremque. Consequatur, nobis
        delectus!
      </p>

      <div className="flex flex-wrap justify-center items-center mt-5 w-full gap-6">
        {clients.map((client) => (
          <div key={client.name} className="w-64">
            <ClientGrid {...client} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
