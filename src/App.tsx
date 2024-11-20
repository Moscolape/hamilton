import FAQsSection from "./components/faq-section";
import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import Navbar from "./components/navbar";
import Section from "./components/section";
import ServicesSection from "./components/services-section";


const App = () => (
  <div className="font-Poppins">
    <Navbar />
    <HeroSection />
    <Section
      id="indigenous"
      title="Indigenous Technology Development Contributions"
      content="We empower local talents to innovate in areas like hardware, firmware, and software,
        contributing to Nigeria's technological advancements."
      bgColor="bg-gray-100"
    />
    <Section
      id="chip-design"
      title="Making Chip Design Accessible to Nigerians"
      content="We focus on creating opportunities for Nigerians to participate in chip design and
        hardware engineering fields."
    />
    <ServicesSection />
    <FAQsSection />
    <Footer />
  </div>
);

export default App;