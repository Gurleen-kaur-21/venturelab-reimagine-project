
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <a href="/" className="flex items-center">
          <span className="text-xl md:text-2xl font-bold text-venture-blue">
            VentureLab<span className="text-venture-dark">Thapar</span>
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-venture-dark hover:text-venture-blue font-medium transition-colors">
            About Us
          </a>
          <a href="#programs" className="text-venture-dark hover:text-venture-blue font-medium transition-colors">
            Programs
          </a>
          <a href="#portfolio" className="text-venture-dark hover:text-venture-blue font-medium transition-colors">
            Portfolio
          </a>
          <a href="#mentors" className="text-venture-dark hover:text-venture-blue font-medium transition-colors">
            Mentors
          </a>
          <a href="#contact" className="text-venture-dark hover:text-venture-blue font-medium transition-colors">
            Contact
          </a>
          <Button className="gradient-bg hover:opacity-90">Apply Now</Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-venture-dark hover:text-venture-blue font-medium transition-colors px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="#programs" 
              className="text-venture-dark hover:text-venture-blue font-medium transition-colors px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Programs
            </a>
            <a 
              href="#portfolio" 
              className="text-venture-dark hover:text-venture-blue font-medium transition-colors px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </a>
            <a 
              href="#mentors" 
              className="text-venture-dark hover:text-venture-blue font-medium transition-colors px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Mentors
            </a>
            <a 
              href="#contact" 
              className="text-venture-dark hover:text-venture-blue font-medium transition-colors px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="gradient-bg hover:opacity-90 w-full">Apply Now</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
