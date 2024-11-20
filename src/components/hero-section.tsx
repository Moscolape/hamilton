const HeroSection = () => (
  <>
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-blue-600 text-white text-center px-4"
    >
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Welcome to Our Technology Contributions Platform
        </h1>
        <p className="text-lg">Pioneering technology advancements in Nigeria</p>
      </div>
    </section>
    <div className="w-full max-w-4xl px-4  mx-auto my-20">
      <div className="aspect-w-16 aspect-h-9 h-[26rem]">
        <iframe
          src="https://www.youtube.com/embed/Xhn9vw8ur0A"
          title="Technology Contributions Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  </>
);

export default HeroSection;
