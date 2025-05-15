
import { useState } from "react";
import { Button } from "@/components/ui/button";

const portfolioCompanies = [
  {
    id: 1,
    name: "TechInnovate",
    category: "AI & ML",
    description: "Using AI to revolutionize customer service automation with intelligent chatbots.",
    image: "bg-gray-300",
    funding: "$500K"
  },
  {
    id: 2,
    name: "GreenEnergy",
    category: "CleanTech",
    description: "Developing sustainable energy solutions for residential buildings.",
    image: "bg-gray-300",
    funding: "$750K"
  },
  {
    id: 3,
    name: "HealthPlus",
    category: "HealthTech",
    description: "Remote patient monitoring platform for chronic disease management.",
    image: "bg-gray-300",
    funding: "$1.2M"
  },
  {
    id: 4,
    name: "FinBox",
    category: "FinTech",
    description: "Democratizing access to investment opportunities through fractional shares.",
    image: "bg-gray-300",
    funding: "$850K"
  },
  {
    id: 5,
    name: "EduLearn",
    category: "EdTech",
    description: "Personalized learning platform using adaptive technology for students.",
    image: "bg-gray-300",
    funding: "$650K"
  },
  {
    id: 6,
    name: "LogiSmart",
    category: "Supply Chain",
    description: "Optimizing logistics operations with predictive analytics and IoT.",
    image: "bg-gray-300",
    funding: "$900K"
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
          <h2 className="section-title">Success Stories</h2>
          <p className="section-subtitle">
            Innovative startups that have flourished with our support and guidance.
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
                {company.name} Logo
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold text-venture-dark">{company.name}</h3>
                  <span className="bg-venture-blue/10 text-venture-blue text-sm px-3 py-1 rounded-full">{company.category}</span>
                </div>
                <p className="text-gray-700 mb-4">{company.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Funding Raised: <span className="text-venture-blue font-medium">{company.funding}</span></span>
                  <Button variant="ghost" className="text-venture-blue hover:text-venture-blue hover:bg-venture-blue/10">Learn More</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="border-venture-blue text-venture-blue hover:bg-venture-blue hover:text-white">
            View All Portfolio Companies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
