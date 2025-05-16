
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { CheckCircle, Calendar, Clock, Users, ArrowRight } from "lucide-react";

const programs = [
  {
    id: 1,
    title: "VL Incubator",
    description: "Our flagship 12-month program designed for early-stage startups with validated prototypes ready to build a scalable business model and secure initial customers.",
    features: [
      "Fully equipped workspace access",
      "Up to ₹10 lakhs seed funding",
      "Dedicated industry mentors",
      "Legal and compliance support",
      "Business model refinement"
    ],
    icon: "🚀",
    duration: "12 Months",
    cohortSize: "12 Startups",
    applications: "Open"
  },
  {
    id: 2,
    title: "ScaleUp Accelerator",
    description: "An intensive 6-month program for growth-stage startups with market traction seeking to expand operations, optimize unit economics, and secure Series A funding.",
    features: [
      "Growth strategy blueprint",
      "Investor connections",
      "Sales and marketing support",
      "Operations scaling guidance",
      "Leadership development"
    ],
    icon: "⚡",
    duration: "6 Months",
    cohortSize: "8 Startups",
    applications: "Applications Open June 15"
  },
  {
    id: 3,
    title: "Ideate & Validate",
    description: "A 3-month pre-incubation program for first-time founders to test their concepts, build MVPs, conduct market validation, and prepare for formal incubation.",
    features: [
      "Lean startup methodology",
      "MVP development support",
      "Customer discovery guidance",
      "Business model canvas",
      "Pitching skills development"
    ],
    icon: "💡",
    duration: "3 Months",
    cohortSize: "20 Startups",
    applications: "Open"
  }
];

const Programs = () => {
  return (
    <section id="programs" className="py-20 bg-venture-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-venture-blue/10 text-venture-blue text-sm font-medium mb-3">
            Our Programs
          </span>
          <h2 className="section-title mx-auto">Comprehensive Startup Support</h2>
          <p className="section-subtitle">
            We offer structured programs tailored to entrepreneurs at every stage of their journey, from idea validation to market expansion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card key={program.id} className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border-0">
              <div className="h-2 bg-gradient-to-r from-venture-blue to-venture-lightblue"></div>
              <CardHeader>
                <div className="text-4xl mb-4">{program.icon}</div>
                <div className="flex justify-between items-center mb-2">
                  <CardTitle className="text-2xl font-heading font-bold text-venture-dark">{program.title}</CardTitle>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    program.applications === "Open" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
                  }`}>{program.applications}</span>
                </div>
                <CardDescription className="text-muted-foreground">{program.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex gap-4 mb-4">
                  <div className="flex items-center gap-1 text-sm">
                    <Calendar className="h-4 w-4 text-venture-blue" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Users className="h-4 w-4 text-venture-blue" />
                    <span>{program.cohortSize}</span>
                  </div>
                </div>
                
                <h4 className="font-medium text-venture-dark mb-3">Program Benefits:</h4>
                <ul className="space-y-2">
                  {program.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-venture-accent flex-shrink-0 mr-2 mt-1" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="pt-2">
                <Button variant="outline" className="w-full border-venture-blue text-venture-blue hover:bg-venture-blue hover:text-white gap-2 group">
                  Program Details
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" className="gradient-bg hover:opacity-90 rounded-full">
            Apply to Our Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
