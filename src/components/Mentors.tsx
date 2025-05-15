
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const mentors = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    title: "Technology Innovation Expert",
    image: "bg-gray-300",
    bio: "Former CTO with 20+ years of experience in technology innovation and product development.",
    expertise: ["Artificial Intelligence", "Product Strategy"]
  },
  {
    id: 2,
    name: "Sunita Sharma",
    title: "Venture Capital Advisor",
    image: "bg-gray-300",
    bio: "Partner at a leading VC firm with expertise in early-stage investments and scaling startups.",
    expertise: ["Investment Strategy", "Growth Hacking"]
  },
  {
    id: 3,
    name: "Amit Patel",
    title: "Serial Entrepreneur",
    image: "bg-gray-300",
    bio: "Founded and successfully exited multiple technology startups in the SaaS and FinTech spaces.",
    expertise: ["Business Model Innovation", "Market Fit"]
  },
  {
    id: 4,
    name: "Dr. Priya Singh",
    title: "Research & Development Specialist",
    image: "bg-gray-300",
    bio: "Distinguished professor with extensive experience in transforming research into commercial applications.",
    expertise: ["IP Strategy", "R&D Commercialization"]
  }
];

const Mentors = () => {
  return (
    <section id="mentors" className="py-20 bg-venture-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-venture-blue font-semibold tracking-wider uppercase text-sm mb-2">Our Mentors</span>
          <h2 className="section-title">Expert Guidance</h2>
          <p className="section-subtitle">
            Our startups benefit from the wisdom and experience of industry leaders who provide strategic guidance and connections.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor) => (
            <Card key={mentor.id} className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className={`h-56 ${mentor.image} rounded-t-lg flex items-center justify-center text-white text-xl`}>
                {mentor.name} Photo
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-venture-dark">{mentor.name}</CardTitle>
                <CardDescription className="text-venture-blue font-medium">{mentor.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">{mentor.bio}</p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                {mentor.expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-venture-blue/10 text-venture-blue text-xs px-2 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="text-2xl font-bold text-venture-dark font-heading mb-4">Interested in Becoming a Mentor?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Share your expertise and experience with the next generation of entrepreneurs. 
            Join our mentor network to guide promising startups on their journey to success.
          </p>
          <div className="inline-flex bg-venture-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-venture-lightblue transition-colors cursor-pointer">
            Join Our Mentor Network
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
