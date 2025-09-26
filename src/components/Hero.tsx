import { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const titles = ['Full Stack Developer', 'Web Developer', 'Creative Coder', 'Problem Solver'];

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText.length < currentTitle.length) {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
      } else if (!isDeleting) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (displayText.length > 0) {
        setDisplayText(displayText.slice(0, -1));
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 animated-bg">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-20 h-20 bg-primary/20 rounded-full blur-xl float" />
        <div className="absolute top-40 right-32 w-32 h-32 bg-accent/20 rounded-full blur-xl float-delayed" />
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-primary/30 rounded-full blur-xl float" />
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-accent/30 rounded-full blur-xl float-delayed" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="space-y-8 animate-fadeInUp">
          <p className="text-lg text-muted-foreground tracking-wider uppercase">Hello, I'm</p>

          <h1 className="text-6xl md:text-8xl font-bold">
            <span className="gradient-text">Jaya Viswanath Reddy</span>
          </h1>

          <div className="h-16 flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl text-foreground">
              I'm a <span className="gradient-accent-text font-semibold">{displayText}</span>
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences through innovative design and cutting-edge technology.
            Let's build something amazing together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-gradient-primary hover:scale-105 transition-all duration-300 glow-primary px-8 py-6 text-lg font-semibold"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-6 text-lg"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="https://github.com/jayaviswanathreddy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-lift"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/jaya-viswanath-reddy-tupakula-731989306/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-lift"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:tjvreddy07@gmail.com"
              aria-label="Email Jaya Viswanath Reddy"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-lift"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        aria-label="Scroll to About Section"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors duration-300 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
