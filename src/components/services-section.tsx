import "../App.css";
import { useState, useEffect } from "react";

const ServicesSection = () => {
  const services = [
    "Product Design",
    "Chip Design",
    "Firmware Development",
    "Hardware Repair",
    "Security Analysis",
    "Drone Technology",
    "Web Application Development",
    "Software System Architecture Design",
    "Hardware Analysis and Design",
    "Artificial Intelligence",
    "Edge Computing",
    "Robotics",
    "Capacity Development Trainings",
  ];

  const [isMobile, setIsMobile] = useState(false);

  // Check screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile breakpoint
    };

    handleResize(); // Run on component mount
    window.addEventListener("resize", handleResize); // Add event listener

    return () => window.removeEventListener("resize", handleResize); // Cleanup listener
  }, []);

  return (
    <section id="services" className="py-[6rem] px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-gray-700">Our Services</h2>
        <div
          className={`grid gap-4 ${isMobile ? "grid-cols-1" : "grid-areas-services"}`}
          style={
            isMobile
              ? {}
              : {
                  gridTemplateAreas: `
                    "a c b d"
                    "e c f d"
                    "g h i j"
                    "g k i l"
                    "m m m m"
                  `,
                }
          }
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-10 border rounded-lg shadow hover:shadow-lg transition bg-bg-pattern bg-cover relative`}
              style={
                isMobile
                  ? {height: 130}
                  : { gridArea: String.fromCharCode(97 + index) }
              }
              data-aos="flip-right"
            >
              <div className="absolute inset-0 sm:bg-black opacity-65 z-10 rounded-lg"></div>
              <h3 className="text-xl font-bold sm:text-white sm:absolute md:text-center z-30">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;