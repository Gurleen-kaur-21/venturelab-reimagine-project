
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-venture-blue font-semibold tracking-wider uppercase text-sm mb-2">About Us</span>
          <h2 className="section-title">Driving Innovation & Entrepreneurship</h2>
          <p className="section-subtitle">
            VentureLab is the business incubator of Thapar Institute of Engineering & Technology, 
            fostering entrepreneurship and innovation in technology and beyond.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-venture-dark font-heading">Our Mission</h3>
              <p className="text-gray-700">
                Our mission is to foster innovation and entrepreneurship by providing a supportive ecosystem 
                for startups to transform innovative ideas into successful business ventures. 
                We aim to create a vibrant entrepreneurial culture that drives economic growth and job creation.
              </p>
              
              <h3 className="text-2xl md:text-3xl font-bold text-venture-dark font-heading">Our Vision</h3>
              <p className="text-gray-700">
                To be the premier startup incubator and accelerator in Northern India, 
                recognized for nurturing high-impact ventures that address real-world challenges through 
                technological innovation and sustainable business models.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="bg-venture-gray p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-bold text-venture-blue mb-2">50+</h4>
                  <p className="text-gray-700">Startups Incubated</p>
                </div>
                
                <div className="bg-venture-gray p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-bold text-venture-blue mb-2">₹10Cr+</h4>
                  <p className="text-gray-700">Funding Secured</p>
                </div>
                
                <div className="bg-venture-gray p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-bold text-venture-blue mb-2">30+</h4>
                  <p className="text-gray-700">Industry Mentors</p>
                </div>
                
                <div className="bg-venture-gray p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-bold text-venture-blue mb-2">200+</h4>
                  <p className="text-gray-700">Jobs Created</p>
                </div>
              </div>
              
              <Button className="gradient-bg hover:opacity-90 mt-6">
                Learn More About Us
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-venture-blue/5 rounded-lg z-0"></div>
              <div className="w-full max-w-md h-[400px] bg-gray-300 rounded-lg shadow-lg relative z-10 flex items-center justify-center">
                About Image
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-venture-blue/5 rounded-lg z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
