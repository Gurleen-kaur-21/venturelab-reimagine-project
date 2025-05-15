
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-venture-blue font-semibold tracking-wider uppercase text-sm mb-2">Contact Us</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have questions or want to learn more about our programs? Reach out to us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-venture-gray p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-venture-dark font-heading mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-venture-dark font-medium">Your Name</label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="border-gray-300 focus:border-venture-blue focus:ring-venture-blue"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-venture-dark font-medium">Email Address</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="border-gray-300 focus:border-venture-blue focus:ring-venture-blue"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-venture-dark font-medium">Subject</label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    className="border-gray-300 focus:border-venture-blue focus:ring-venture-blue"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-venture-dark font-medium">Your Message</label>
                  <Textarea
                    id="message"
                    placeholder="Type your message here..."
                    rows={5}
                    className="border-gray-300 focus:border-venture-blue focus:ring-venture-blue resize-none"
                  />
                </div>
                
                <Button type="submit" className="w-full gradient-bg hover:opacity-90">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-venture-dark font-heading mb-6">Visit Our Office</h3>
            <div className="mb-8">
              <p className="text-gray-700">
                VentureLab Thapar<br />
                Thapar Institute of Engineering & Technology<br />
                Patiala, Punjab 147004<br />
                India
              </p>
              
              <div className="mt-4">
                <p className="text-venture-dark font-medium">Email:</p>
                <p className="text-venture-blue">info@venturelab.org.in</p>
              </div>
              
              <div className="mt-2">
                <p className="text-venture-dark font-medium">Phone:</p>
                <p className="text-venture-blue">+91 123 456 7890</p>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-venture-dark font-heading mb-4">Office Hours</h3>
            <div className="space-y-2 mb-8">
              <p className="flex justify-between">
                <span className="text-gray-700">Monday - Friday:</span>
                <span className="text-venture-dark font-medium">9:00 AM - 5:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-700">Saturday:</span>
                <span className="text-venture-dark font-medium">10:00 AM - 2:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-700">Sunday:</span>
                <span className="text-venture-dark font-medium">Closed</span>
              </p>
            </div>
            
            <div className="w-full h-72 bg-gray-300 rounded-lg shadow-md flex items-center justify-center">
              Google Map will be embedded here
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
