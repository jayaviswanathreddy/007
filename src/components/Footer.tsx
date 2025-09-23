import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Back to Top Button */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <Button
          onClick={scrollToTop}
          className="bg-gradient-primary hover:bg-gradient-primary hover:scale-110 transition-all duration-300 glow-primary p-3 rounded-full"
        >
          <ArrowUp size={20} />
        </Button>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center space-y-6">
          {/* Logo/Name */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">Jaya Viswanath Reddy</h3>
            <p className="text-muted-foreground">Full Stack Developer & Web Developer</p>
          </div>

          {/* Navigation Links */}
          <nav className="flex justify-center space-x-8 text-sm">
            <button 
              onClick={() => document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Projects
            </button>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Contact
            </button>
          </nav>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-primary opacity-30"></div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-2 text-sm text-muted-foreground">
            <span>© {currentYear} Jaya Viswanath Reddy. All rights reserved.</span>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center space-x-1">
              <span>Made with</span>
              <Heart size={14} className="text-red-500 fill-current" />
              <span>VISSU and lots of coffee</span>
            </div>
          </div>

          {/* Fun Quote */}
          <div className="pt-4">
            <p className="text-xs text-muted-foreground italic">
              "Code is poetry written in logic, designed with purpose, and crafted with passion."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;