
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const About = () => {
  const stats = [
    { number: "75+", label: "Startups Supported" },
    { number: "₹15Cr+", label: "Funding Raised" },
    { number: "45+", label: "Industry Mentors" },
    { number: "300+", label: "Jobs Created" }
  ];

  const features = [
    "Modern co-working spaces and specialized labs",
    "One-on-one mentorship from industry veterans",
    "Seed funding and investor networking opportunities",
    "Legal, IP, and regulatory compliance support"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-venture-blue/10 text-venture-blue text-sm font-medium mb-3">
            About Us
          </span>
          <h2 className="section-title mx-auto">Catalyzing Innovation at Thapar</h2>
          <p className="section-subtitle">
            VentureLab is the premier technology business incubator at Thapar Institute, established 
            to foster entrepreneurship and accelerate innovation-driven ventures to market success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl md:text-3xl font-bold text-venture-dark font-heading mb-4">Our Purpose</h3>
                <p className="text-gray-700">
                  VentureLab exists to nurture technology-driven startups with high growth potential by providing them with the 
                  critical support, mentorship, and resources needed to overcome early challenges and accelerate their path to success.
                  We strive to build a self-sustaining entrepreneurial ecosystem centered around Thapar's innovation community.
                </p>
              </div>
              
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl md:text-3xl font-bold text-venture-dark font-heading mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  To establish VentureLab as North India's leading innovation hub that transforms promising ideas into 
                  globally competitive enterprises through our extensive support network, industry connections, and 
                  specialized knowledge resources.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-venture-dark mb-4">What We Provide</h3>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-venture-accent flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <Button className="gradient-bg hover:opacity-90 mt-6 rounded-full">
                  Our History and Mission
                </Button>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-venture-blue/5 rounded-full z-0"></div>
              <div className="w-full max-w-md h-[400px] bg-gray-200 rounded-2xl shadow-lg relative z-10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-venture-blue/20 to-transparent"></div>
                <p className="text-venture-dark">Our Innovation Hub</p>
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-venture-blue/5 rounded-full z-0"></div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-white p-4 rounded-xl shadow-md text-center card-hover"
                  >
                    <h4 className="text-2xl font-bold text-venture-accent mb-1">{stat.number}</h4>
                    <p className="text-gray-700 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
