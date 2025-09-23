import { useState } from 'react';
import { Send, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'tjvreddy07@gmail.com',
      href: 'mailto:tjvreddy07@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/jayaviswanathreddy',
      color: 'hover:text-primary'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jaya-viswanath-reddy-tupakula-731989306/',
      color: 'hover:text-accent'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:tjvreddy07@gmail.com',
      color: 'hover:text-primary'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Ready to start your next project? I'd love to hear from you. 
          Let's discuss how we can bring your ideas to life.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle className="text-2xl gradient-accent-text">Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
              </div>
              
              <Input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="bg-background/50 border-border focus:border-primary"
              />
              
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="bg-background/50 border-border focus:border-primary resize-none"
              />
              
              <Button 
                type="submit"
                className="w-full bg-gradient-primary hover:bg-gradient-primary hover:scale-105 transition-all duration-300 glow-primary"
                size="lg"
              >
                <Send size={16} className="mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 gradient-text">Let's Connect</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I'm always interested in new opportunities and exciting projects. 
              Whether you're a company looking to hire, or you're a fellow developer 
              wanting to collaborate, don't hesitate to reach out.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            {contactInfo.map((info) => (
              <Card key={info.label} className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover-lift">
                <CardContent className="p-4">
                  <a 
                    href={info.href}
                    className="flex items-center space-x-4 text-foreground hover:text-primary transition-colors"
                  >
                    <div className="p-3 bg-background/50 rounded-full">
                      <info.icon size={20} />
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-card hover:bg-card-hover rounded-full transition-all duration-300 hover-lift ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <Card className="bg-gradient-primary text-primary-foreground border-none">
            <CardContent className="p-6 text-center">
              <h4 className="text-xl font-bold mb-2">Ready to Start?</h4>
              <p className="mb-4 opacity-90">
                Let's discuss your project and see how I can help bring it to life.
              </p>
              <Button 
                variant="secondary"
                className="bg-background/20 hover:bg-background/30 text-white border-white/20"
                asChild
              >
                <a href="mailto:tjvreddy07@gmail.com">
                  Schedule a Call
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;