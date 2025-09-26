import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import portfolioScreenshot from '@/assets/portfolio-screenshot.png';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio website built with modern web technologies. Features a responsive design, smooth animations, and clean user interface to showcase my skills and journey as a student.',
      image: portfolioScreenshot,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'React Router'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          My <span className="gradient-text">Work</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Here is my main project that I've been working on. It represents my learning journey 
          and showcases the skills I've developed as a student.
        </p>
      </div>

      {/* Featured Projects */}
      <div className="space-y-16">
        <div className="space-y-20">
          {featuredProjects.map((project, index) => (
            <div key={project.title} className={`grid lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <Card className="overflow-hidden bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover-lift group">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-primary opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                </Card>
              </div>

              {/* Project Details */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                    Featured
                  </Badge>
                  <h4 className="text-3xl font-bold mb-4 gradient-text">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-secondary/50">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button 
                    className="bg-gradient-primary hover:bg-gradient-primary hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.githubUrl} target="https://github.com/jayaviswanathreddy/007.git" rel="https://github.com/jayaviswanathreddy/007.git">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
