
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
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
    title: "Incubation Program",
    description: "A 6-month program designed for early-stage startups looking for mentorship, infrastructure, and initial funding to validate their business model.",
    features: [
      "Dedicated workspace",
      "Mentorship from industry experts",
      "Access to funding opportunities",
      "Legal and IP support",
      "Business development assistance"
    ],
    icon: "🚀",
    duration: "6 Months",
    cohortSize: "10 Startups",
    applications: "Open"
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
    icon: "⚡",
    duration: "3 Months",
    cohortSize: "8 Startups",
    applications: "Opening Soon"
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
    icon: "💡",
    duration: "2 Months",
    cohortSize: "15 Startups",
    applications: "Open"
  }
];

const Programs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="programs" className="py-20 bg-venture-light" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-venture-blue/10 text-venture-blue text-sm font-medium mb-3">
            Our Programs
          </span>
          <h2 className="section-title mx-auto">Tailored Support for Every Stage</h2>
          <p className="section-subtitle">
            We offer specialized programs designed to support entrepreneurs at different stages of their journey, from ideation to scaling.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {programs.map((program) => (
            <motion.div key={program.id} variants={item}>
              <Card className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border-0">
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
                  
                  <h4 className="font-medium text-venture-dark mb-3">What you get:</h4>
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
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button size="lg" className="gradient-bg hover:opacity-90 rounded-full">
            Apply to Our Programs
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
