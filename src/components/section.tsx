import React from "react";
import { chips, microchips } from "../constants/assets";

interface SectionProps {
  id: string;
  title: string;
  content: string | React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, content }) => (
  <section
    id={id}
    data-aos="fade-up"
    className={`py-[6rem] px-3 md:px-20 bg-white text-gray-700`}
  >
    <div className="container mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
        {title}
      </h2>
      <div
        className={`flex flex-col-reverse md:flex-row ${
          title.toLocaleLowerCase().includes("chip") ? "md:flex-row" : "md:flex-row-reverse"
        } items-center justify-between gap-8`}
      >
        <img
          src={title.toLocaleLowerCase().includes("chip") ? chips : microchips}
          alt="chip"
          className="w-full h-64 md:w-2/5 md:h-96 object-cover"
          data-aos="flip-up"
        />
        {typeof content === "string" ? (
          <p className="text-center md:text-left">{content}</p>
        ) : (
          content
        )}
      </div>
    </div>
  </section>
);

export default Section;