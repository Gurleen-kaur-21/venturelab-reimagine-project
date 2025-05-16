
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";

const mentors = [
  {
    id: 1,
    name: "Dr. Amit Kapoor",
    title: "Innovation & Strategy Expert",
    image: "bg-gray-300",
    bio: "Former innovation lead at a multinational tech company with expertise in product development and market entry strategies.",
    expertise: ["Technology Strategy", "Product Development"],
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: 2,
    name: "Priya Mehta",
    title: "Investment & Finance Advisor",
    image: "bg-gray-300",
    bio: "Managing partner at a growth-stage venture fund with 15+ years of experience in evaluating and scaling technology startups.",
    expertise: ["Venture Funding", "Financial Modeling"],
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: 3,
    name: "Suresh Patel",
    title: "Serial Tech Entrepreneur",
    image: "bg-gray-300",
    bio: "Founded and successfully exited three B2B SaaS startups, specializing in growth hacking and lean startup methodology.",
    expertise: ["SaaS Scaling", "Go-to-Market Strategy"],
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: 4,
    name: "Dr. Leela Sharma",
    title: "Research Commercialization Expert",
    image: "bg-gray-300",
    bio: "Academic turned entrepreneur who has successfully commercialized university research into profitable ventures.",
    expertise: ["IP Strategy", "Research Translation"],
    social: {
      linkedin: "#",
      twitter: "#"
    }
  }
];

const Mentors = () => {
  return (
    <section id="mentors" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-venture-blue/10 text-venture-blue text-sm font-medium mb-3">
            Our Mentors
          </span>
          <h2 className="section-title mx-auto">Learn from the Best</h2>
          <p className="section-subtitle">
            Our startups benefit from the guidance of accomplished industry leaders who provide valuable insights and connections.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor) => (
            <Card key={mentor.id} className="bg-white border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 h-full overflow-hidden">
              <div className={`h-56 ${mentor.image} rounded-t-lg flex items-center justify-center text-white text-xl relative overflow-hidden group`}>
                <div className="absolute inset-0 bg-gradient-to-t from-venture-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="z-10">{mentor.name}</span>
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
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-venture-blue to-venture-lightblue rounded-2xl shadow-md p-8 text-center text-white">
          <h3 className="text-2xl font-bold font-heading mb-4">Become a VentureLab Mentor</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Want to guide the next generation of entrepreneurs? Join our mentor network and share your expertise
            to help shape innovative solutions and impactful businesses.
          </p>
          <button className="bg-white text-venture-blue px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
            Apply as Mentor
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
