import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedSection from "./components/FeaturedSection";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <main id="main-contain" className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <FeaturedSection />
        <Workflow />
        <Pricing />
        <Testimonials />
      </main>  

      <div className="max-w-7xl mx-auto px-6">
        <Footer />
      </div>
    </>
  );
};

export default App;
