import { Code, Palette, Rocket, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'React, TypeScript, Next.js, Vue.js, and modern CSS frameworks',
      color: 'text-primary'
    },
    {
      icon: Palette,
      title: 'Web Design',
      description: 'HTML, CSS, responsive design, and modern web layouts',
      color: 'text-accent'
    },
    {
      icon: Rocket,
      title: 'Backend Development',
      description: 'Node.js, Python, databases, APIs, and cloud technologies',
      color: 'text-primary'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Agile methodologies, version control, and effective communication',
      color: 'text-accent'
    }
  ];

  const stats = [
    { number: '0', label: 'Projects Completed' },
    { number: '0', label: 'Years Experience' }
  ];

  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          I'm a passionate developer who loves creating digital experiences that make a difference. 
          With a strong foundation in both design and development, I bring ideas to life.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
        {/* Personal Story */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold gradient-accent-text">My Journey</h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              As a passionate computer science student, I'm constantly learning and exploring 
              the fascinating world of technology and programming.
            </p>
            <p>
              Currently pursuing my degree while building practical skills through hands-on 
              projects and staying updated with the latest web development trends and technologies.
            </p>
            <p>
              When I'm not studying or coding, I enjoy participating in coding competitions, 
              working on personal projects, and connecting with fellow developers in the tech community.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover-lift">
              <CardContent className="p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="space-y-12">
        <h3 className="text-3xl font-bold text-center">
          What I <span className="gradient-text">Do</span>
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover-lift group"
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className={`inline-flex p-4 rounded-full bg-background/50 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon size={32} />
                </div>
                <h4 className="text-xl font-semibold">{skill.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;