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
    <section id="services" className="py-16 bg-gray-100 text-gray-700 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg md:text-xl font-bold mb-2">{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
