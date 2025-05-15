
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-venture-gray overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-30 z-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border-2 border-venture-blue opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border-2 border-venture-blue opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border-2 border-venture-blue opacity-15"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24 md:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block text-venture-blue font-semibold tracking-wider uppercase text-sm">VentureLab Thapar</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-venture-dark font-heading leading-tight">
              Where <span className="text-venture-blue">Innovation</span> Meets <span className="text-venture-blue">Opportunity</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Empowering entrepreneurs with mentorship, resources, and funding to transform innovative ideas into successful ventures.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gradient-bg hover:opacity-90">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-venture-blue text-venture-blue hover:bg-venture-blue hover:text-white">
                Learn More
              </Button>
            </div>
            <div className="pt-8">
              <p className="text-venture-dark font-medium mb-3">Trusted By</p>
              <div className="flex flex-wrap gap-8 items-center opacity-70">
                <div className="w-24 h-12 bg-gray-300 rounded flex items-center justify-center">Logo 1</div>
                <div className="w-24 h-12 bg-gray-300 rounded flex items-center justify-center">Logo 2</div>
                <div className="w-24 h-12 bg-gray-300 rounded flex items-center justify-center">Logo 3</div>
                <div className="w-24 h-12 bg-gray-300 rounded flex items-center justify-center">Logo 4</div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-venture-blue/10 rounded-full z-0"></div>
              <div className="w-full max-w-lg h-[500px] bg-gray-300 rounded-lg shadow-lg relative z-10 flex items-center justify-center">
                Hero Image
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-venture-blue/10 rounded-full z-0"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
