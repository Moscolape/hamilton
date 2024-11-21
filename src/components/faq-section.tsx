import { useState } from "react";
import "../App.css";


const FAQsSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Indigenous Technology Development?",
      answer: "Efforts aimed at leveraging local talents to build technologies for community needs.",
    },
    {
      question: "How can I get involved in your programs?",
      answer: "Reach out through our contact section below to learn more about partnership or enrollment opportunities.",
    },
    {
      question: "Do you offer custom web application solutions?",
      answer: "Yes, we specialize in building tailored web applications to meet specific business needs.",
    },
    {
      question: "What technologies do you use for web development?",
      answer: "We use modern technologies like React, Typescript, Node.js, MongoDB and more to ensure robust and scalable applications.",
    },
    {
      question: "How long does it take to develop a web application?",
      answer: "The timeline depends on the project's complexity but typically ranges from a few weeks to several months.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faqs" data-aos="fade-down" className="py-16 bg-white text-gray-700 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b pb-4"
              data-aos="fade-right"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-bold text-lg">{faq.question}</h3>
                <span className="text-xl">
                  {openFAQ === index ? "−" : "+"}
                </span>
              </div>
              {openFAQ === index && (
                <p className="mt-2 text-gray-600 animate-fadeDownFast">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;