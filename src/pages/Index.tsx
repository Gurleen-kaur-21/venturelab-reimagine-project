
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Portfolio from "@/components/Portfolio";
import Mentors from "@/components/Mentors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Portfolio />
      <Mentors />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
