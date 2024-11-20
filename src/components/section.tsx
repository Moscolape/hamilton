import React from "react";

interface SectionProps {
  id: string;
  title: string;
  content: string | React.ReactNode;
  bgColor?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, content, bgColor }) => (
  <section
    id={id}
    className={`py-16 px-4 ${bgColor || "bg-white"} text-gray-700`}
  >
    <div className="container mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">{title}</h2>
      <p>{content}</p>
    </div>
  </section>
);

export default Section;
