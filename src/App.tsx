import { useEffect } from "react";
import FAQsSection from "./components/faq-section";
import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import Navbar from "./components/navbar";
import Section from "./components/section";
import ServicesSection from "./components/services-section";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="font-Poppins">
      <Navbar />
      <HeroSection />
      <Section
        id="indigenous"
        title="Indigenous Technology Development Contributions"
        content={
          <div className="w-full md:w-1/2 md:px-4">
            <p className="mb-4">
              We empower local talents to innovate in areas like hardware,
              firmware, and software, contributing to Nigeria's technological
              advancements. Our mission is to drive growth in indigenous
              technology by leveraging the unique capabilities and creativity of
              local developers and engineers.
            </p>
            <ul className="list-disc list-inside text-left space-y-2">
              <li>
                <strong>Encouraging Innovation:</strong> Organizing hackathons,
                competitions, and innovation challenges to inspire creativity
                among young developers and technologists.
              </li>
              <li>
                <strong>Education and Training:</strong> Conducting specialized
                training programs in hardware design, embedded systems, and AI
                tailored for local talent.
              </li>
              <li>
                <strong>Community Engagement:</strong> Collaborating with
                schools, universities, and local communities to promote STEM
                education and raise awareness of the value of indigenous
                technologies.
              </li>
              <li>
                <strong>Partnerships with Industry Leaders:</strong>{" "}
                Establishing partnerships with global tech companies to create
                opportunities for knowledge exchange and access to advanced
                technologies.
              </li>
            </ul>
          </div>
        }
        bgColor="bg-blue-200"
      />
      <Section
        id="chip-design"
        title="Making Chip Design Accessible to Nigerians"
        content={
          <div className="w-full md:w-1/2 md:px-4">
            <p className="mb-4">
              We focus on creating opportunities for Nigerians to participate in
              chip design and hardware engineering fields. Our aim is to
              cultivate a thriving ecosystem for semiconductor design and
              manufacturing within the country.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Offering hands-on training programs in chip design and
                fabrication processes.
              </li>
              <li>
                Collaborating with global tech leaders to provide access to
                advanced design tools and resources.
              </li>
              <li>
                Supporting research and development initiatives at universities
                and tech hubs.
              </li>
              <li>
                Providing mentorship opportunities with industry experts to
                guide aspiring engineers.
              </li>
              <li>
                Encouraging innovation through funded projects and hackathons.
              </li>
            </ul>
            <p className="mt-4">
              These initiatives aim to empower the next generation of engineers
              to contribute to the global semiconductor industry while
              addressing Nigeria's technological needs.
            </p>
          </div>
        }
      />
      <ServicesSection />
      <FAQsSection />
      <Footer />
    </div>
  );
};

export default App;
