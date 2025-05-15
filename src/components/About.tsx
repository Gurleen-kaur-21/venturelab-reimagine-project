
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle } from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const stats = [
    { number: "50+", label: "Startups Incubated" },
    { number: "₹10Cr+", label: "Funding Secured" },
    { number: "30+", label: "Industry Mentors" },
    { number: "200+", label: "Jobs Created" }
  ];

  const features = [
    "State-of-the-art workspace and labs",
    "Dedicated mentorship from industry experts",
    "Funding support and investor connections",
    "IP and legal guidance"
  ];

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-venture-blue/10 text-venture-blue text-sm font-medium mb-3">
            About Us
          </span>
          <h2 className="section-title mx-auto">Driving Innovation & Entrepreneurship</h2>
          <p className="section-subtitle">
            VentureLab is the business incubator of Thapar Institute of Engineering & Technology, 
            fostering entrepreneurship and innovation in technology and beyond.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <div className="space-y-8">
              <motion.div variants={item} className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl md:text-3xl font-bold text-venture-dark font-heading mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  Our mission is to foster innovation and entrepreneurship by providing a supportive ecosystem 
                  for startups to transform innovative ideas into successful business ventures. 
                  We aim to create a vibrant entrepreneurial culture that drives economic growth and job creation.
                </p>
              </motion.div>
              
              <motion.div variants={item} className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl md:text-3xl font-bold text-venture-dark font-heading mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  To be the premier startup incubator and accelerator in Northern India, 
                  recognized for nurturing high-impact ventures that address real-world challenges through 
                  technological innovation and sustainable business models.
                </p>
              </motion.div>
              
              <motion.div variants={item}>
                <h3 className="text-xl font-bold text-venture-dark mb-4">What We Offer</h3>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-venture-accent flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div variants={item}>
                <Button className="gradient-bg hover:opacity-90 mt-6 rounded-full">
                  Learn More About Us
                </Button>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-venture-blue/5 rounded-full z-0"></div>
              <div className="w-full max-w-md h-[400px] bg-gray-200 rounded-2xl shadow-lg relative z-10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-venture-blue/20 to-transparent"></div>
                <p className="text-venture-dark">About Image</p>
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-venture-blue/5 rounded-full z-0"></div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white p-4 rounded-xl shadow-md text-center card-hover"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <h4 className="text-2xl font-bold text-venture-accent mb-1">{stat.number}</h4>
                    <p className="text-gray-700 text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
