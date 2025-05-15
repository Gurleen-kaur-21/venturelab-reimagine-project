
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";

const mentors = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    title: "Technology Innovation Expert",
    image: "bg-gray-300",
    bio: "Former CTO with 20+ years of experience in technology innovation and product development.",
    expertise: ["Artificial Intelligence", "Product Strategy"],
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: 2,
    name: "Sunita Sharma",
    title: "Venture Capital Advisor",
    image: "bg-gray-300",
    bio: "Partner at a leading VC firm with expertise in early-stage investments and scaling startups.",
    expertise: ["Investment Strategy", "Growth Hacking"],
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: 3,
    name: "Amit Patel",
    title: "Serial Entrepreneur",
    image: "bg-gray-300",
    bio: "Founded and successfully exited multiple technology startups in the SaaS and FinTech spaces.",
    expertise: ["Business Model Innovation", "Market Fit"],
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: 4,
    name: "Dr. Priya Singh",
    title: "Research & Development Specialist",
    image: "bg-gray-300",
    bio: "Distinguished professor with extensive experience in transforming research into commercial applications.",
    expertise: ["IP Strategy", "R&D Commercialization"],
    social: {
      linkedin: "#",
      twitter: "#"
    }
  }
];

const Mentors = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="mentors" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-venture-blue/10 text-venture-blue text-sm font-medium mb-3">
            Our Mentors
          </span>
          <h2 className="section-title mx-auto">Expert Guidance</h2>
          <p className="section-subtitle">
            Our startups benefit from the wisdom and experience of industry leaders who provide strategic guidance and connections.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {mentors.map((mentor) => (
            <motion.div key={mentor.id} variants={item}>
              <Card className="bg-white border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 h-full overflow-hidden">
                <div className={`h-56 ${mentor.image} rounded-t-lg flex items-center justify-center text-white text-xl relative overflow-hidden group`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-venture-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="z-10">{mentor.name} Photo</span>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold text-venture-dark">{mentor.name}</CardTitle>
                  <CardDescription className="text-venture-blue font-medium">{mentor.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">{mentor.bio}</p>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-3">
                  <div className="flex flex-wrap gap-2">
                    {mentor.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-venture-blue/10 text-venture-blue text-xs px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-2">
                    <a href={mentor.social.linkedin} className="text-gray-500 hover:text-venture-blue transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a href={mentor.social.twitter} className="text-gray-500 hover:text-venture-blue transition-colors">
                      <Twitter className="h-4 w-4" />
                    </a>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 bg-gradient-to-r from-venture-blue to-venture-lightblue rounded-2xl shadow-md p-8 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold font-heading mb-4">Interested in Becoming a Mentor?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Share your expertise and experience with the next generation of entrepreneurs. 
            Join our mentor network to guide promising startups on their journey to success.
          </p>
          <button className="bg-white text-venture-blue px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
            Join Our Mentor Network
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Mentors;
