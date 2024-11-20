const FAQsSection = () => {
  const faqs = [
    {
      question: "What is Indigenous Technology Development?",
      answer: "Efforts aimed at leveraging local talents to build technologies for community needs.",
    },
    {
      question: "How can I get involved in your programs?",
      answer:
        "Reach out through our contact section below to learn more about partnership or enrollment opportunities.",
    },
  ];

  return (
    <section id="faqs" className="py-16 bg-white text-gray-700 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3 className="font-bold">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
