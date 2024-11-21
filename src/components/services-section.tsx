import "../App.css";

const ServicesSection = () => {
  const services = [
    "Web Application Development",
    "Chip Design",
    "Firmware Development",
    "Hardware Repair",
    "Security Analysis",
    "Drone Technology",
    "Product Design",
    "Software System Architecture Design",
    "Hardware Analysis and Design",
    "Artificial Intelligence",
    "Edge Computing",
    "Robotics",
    "Capacity Development Trainings",
  ];

  return (
    <section id="services" className="py-[6rem] bg-blue-200 text-gray-700 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">Our Services</h2>
        <div className="overflow-hidden relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 min-w-[19rem] border rounded-lg shadow hover:shadow-lg transition bg-white mx-2"
              >
                <h3 className="text-lg md:text-xl font-bold mb-2">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;