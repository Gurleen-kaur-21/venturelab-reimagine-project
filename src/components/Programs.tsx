
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

const programs = [
  {
    id: 1,
    title: "Incubation Program",
    description: "A 6-month program designed for early-stage startups looking for mentorship, infrastructure, and initial funding to validate their business model.",
    features: [
      "Dedicated workspace",
      "Mentorship from industry experts",
      "Access to funding opportunities",
      "Legal and IP support",
      "Business development assistance"
    ],
    icon: "🚀"
  },
  {
    id: 2,
    title: "Accelerator Program",
    description: "An intensive 3-month program for growth-stage startups seeking to scale their operations, refine their business model, and secure additional investment.",
    features: [
      "Product development support",
      "Go-to-market strategy",
      "Investor connections",
      "Industry-specific mentoring",
      "Growth hacking workshops"
    ],
    icon: "⚡"
  },
  {
    id: 3,
    title: "Pre-Incubation Program",
    description: "A 2-month program for idea-stage entrepreneurs to help validate their concepts, develop MVPs, and prepare for formal incubation.",
    features: [
      "Idea validation",
      "MVP development",
      "Market research support",
      "Business model canvas",
      "Pitch deck preparation"
    ],
    icon: "💡"
  }
];

const Programs = () => {
  return (
    <section id="programs" className="py-20 bg-venture-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-venture-blue font-semibold tracking-wider uppercase text-sm mb-2">Our Programs</span>
          <h2 className="section-title">Tailored Support for Every Stage</h2>
          <p className="section-subtitle">
            We offer specialized programs designed to support entrepreneurs at different stages of their journey, from ideation to scaling.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card key={program.id} className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="text-4xl mb-4">{program.icon}</div>
                <CardTitle className="text-2xl font-heading font-bold text-venture-dark">{program.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {program.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-venture-blue flex-shrink-0 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-venture-blue text-venture-blue hover:bg-venture-blue hover:text-white">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" className="gradient-bg hover:opacity-90">
            Apply to Our Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
