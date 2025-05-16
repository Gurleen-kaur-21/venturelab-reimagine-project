
import { useState } from "react";
import { Button } from "@/components/ui/button";

const portfolioCompanies = [
  {
    id: 1,
    name: "MedAssist AI",
    category: "AI & ML",
    description: "AI-driven diagnostic assistant helping physicians detect diseases from medical imaging with 98% accuracy.",
    image: "bg-gray-300",
    funding: "₹1.8 Cr"
  },
  {
    id: 2,
    name: "SolarDwellings",
    category: "CleanTech",
    description: "Developing integrated solar solutions for affordable residential housing that reduce energy costs by 60%.",
    image: "bg-gray-300",
    funding: "₹2.5 Cr"
  },
  {
    id: 3,
    name: "VitalTrack",
    category: "HealthTech",
    description: "Remote patient monitoring platform for chronic diseases using non-invasive wearable technology.",
    image: "bg-gray-300",
    funding: "₹3.2 Cr"
  },
  {
    id: 4,
    name: "WealthWise",
    category: "FinTech",
    description: "Democratizing investment access through fractional ownership of premium assets with AI-powered portfolio optimization.",
    image: "bg-gray-300",
    funding: "₹2.7 Cr"
  },
  {
    id: 5,
    name: "AdaptLearn",
    category: "EdTech",
    description: "Personalized learning platform using AI to adapt content difficulty based on student performance patterns.",
    image: "bg-gray-300",
    funding: "₹1.5 Cr"
  },
  {
    id: 6,
    name: "SupplySync",
    category: "Supply Chain",
    description: "Optimizing logistics with blockchain-based tracking and IoT sensors for real-time inventory management.",
    image: "bg-gray-300",
    funding: "₹2.2 Cr"
  }
];

const categories = ["All", "AI & ML", "CleanTech", "HealthTech", "FinTech", "EdTech", "Supply Chain"];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  
  const filteredCompanies = filter === "All" 
    ? portfolioCompanies 
    : portfolioCompanies.filter(company => company.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-venture-blue font-semibold tracking-wider uppercase text-sm mb-2">Our Portfolio</span>
          <h2 className="section-title">Venture Showcase</h2>
          <p className="section-subtitle">
            Meet the innovative startups that have grown with VentureLab's support and are now making an impact in their industries.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              className={filter === category ? "gradient-bg" : "border-venture-blue text-venture-blue hover:bg-venture-blue hover:text-white"}
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCompanies.map((company) => (
            <div key={company.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className={`h-48 ${company.image} flex items-center justify-center text-white text-xl`}>
                {company.name}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold text-venture-dark">{company.name}</h3>
                  <span className="bg-venture-blue/10 text-venture-blue text-sm px-3 py-1 rounded-full">{company.category}</span>
                </div>
                <p className="text-gray-700 mb-4">{company.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Funding Raised: <span className="text-venture-blue font-medium">{company.funding}</span></span>
                  <Button variant="ghost" className="text-venture-blue hover:text-venture-blue hover:bg-venture-blue/10">Company Profile</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="border-venture-blue text-venture-blue hover:bg-venture-blue hover:text-white">
            View All Portfolio Startups
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
