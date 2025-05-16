
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-venture-light to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-venture-blue/5 animate-float" style={{ animationDelay: "0s" }}></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-venture-lightblue/10 animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-venture-accent/5 animate-float" style={{ animationDelay: "2s" }}></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24 md:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-venture-blue/10 text-venture-blue font-semibold rounded-full text-sm">
              <span className="w-2 h-2 rounded-full bg-venture-blue animate-pulse"></span> 
              Thapar Institute of Engineering & Technology
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-venture-dark font-heading leading-tight">
              Transforming <span className="text-venture-blue">Ideas</span> into <span className="text-venture-accent">Enterprise</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700">
              VentureLab Thapar incubates and accelerates startups through expert mentorship, state-of-the-art resources, and strategic funding access in our innovation ecosystem.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="gradient-bg hover:opacity-90 gap-2 rounded-full">
                Submit Your Proposal <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-venture-blue text-venture-blue hover:bg-venture-blue hover:text-white rounded-full">
                Explore Programs
              </Button>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="pt-12"
            >
              <p className="text-venture-dark font-medium mb-3">Partners & Collaborators</p>
              <div className="flex flex-wrap gap-8 items-center">
                <div className="w-24 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">TBI</div>
                <div className="w-24 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">NIDHI</div>
                <div className="w-24 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">TIET</div>
                <div className="w-24 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">DST</div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-venture-accent/10 rounded-full z-0"></div>
              <div className="w-full max-w-lg h-[500px] bg-gray-200 rounded-2xl shadow-lg relative z-10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-venture-blue/20 to-venture-accent/20"></div>
                <p className="text-venture-dark">VentureLab Innovation Hub</p>
              </div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-venture-blue/10 rounded-full z-0"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,288L48,266.7C96,245,192,203,288,186.7C384,171,480,181,576,176C672,171,768,149,864,149.3C960,149,1056,171,1152,176C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
