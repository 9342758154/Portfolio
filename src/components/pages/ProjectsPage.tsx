import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

export const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: 'AI-Powered Task Manager',
      description: 'A modern task management application with AI-powered suggestions and smart scheduling features.',
      tech: ['React', 'TypeScript', 'Node.js', 'OpenAI API', 'PostgreSQL'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      gradient: 'from-cosmic-purple to-cosmic-blue',
    },
    {
      id: 2,
      title: 'E-commerce Dashboard',
      description: 'Comprehensive analytics dashboard for e-commerce businesses with real-time data visualization.',
      tech: ['React', 'D3.js', 'Express', 'MongoDB', 'Socket.io'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      gradient: 'from-cosmic-cyan to-cosmic-blue',
    },
    {
      id: 3,
      title: '3D Portfolio Website',
      description: 'Interactive 3D portfolio website built with Three.js and React Three Fiber.',
      tech: ['React', 'Three.js', 'Framer Motion', 'GLSL', 'WebGL'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      gradient: 'from-cosmic-pink to-cosmic-purple',
    },
    {
      id: 4,
      title: 'Real-time Chat Application',
      description: 'Modern chat application with end-to-end encryption and file sharing capabilities.',
      tech: ['React', 'Socket.io', 'Node.js', 'Redis', 'JWT'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      gradient: 'from-cosmic-blue to-cosmic-cyan',
    },
    {
      id: 5,
      title: 'Blockchain Voting System',
      description: 'Decentralized voting platform built on Ethereum with smart contracts.',
      tech: ['React', 'Solidity', 'Web3.js', 'Ethereum', 'MetaMask'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      gradient: 'from-cosmic-purple to-cosmic-pink',
    },
    {
      id: 6,
      title: 'Weather Forecast App',
      description: 'Beautiful weather application with advanced animations and location-based forecasts.',
      tech: ['React Native', 'TypeScript', 'Weather API', 'Reanimated'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      gradient: 'from-cosmic-cyan to-cosmic-purple',
    },
  ];

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Projects
          </h1>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            A collection of projects that showcase my skills and passion for creating innovative digital solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="glass p-6 h-full hover-lift overflow-hidden relative">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                
                <div className="relative z-10 space-y-4">
                  {/* Project Header */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-glow group-hover:scale-105 transition-transform duration-300">
                      {project.title}
                    </h3>
                    <p className="text-foreground-muted">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs cosmic-bg"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      variant="cosmic"
                      size="sm"
                      className="flex-1 group/btn"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="group-hover/btn:animate-bounce" size={16} />
                        Live Demo
                      </a>
                    </Button>
                    
                    <Button
                      variant="glow"
                      size="sm"
                      className="flex-1 group/btn"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="group-hover/btn:animate-spin" size={16} />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`} />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Card className="glass p-8 cosmic-bg">
            <h2 className="text-2xl font-bold gradient-text mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-foreground-muted mb-6">
              I'm always open to discussing new opportunities and exciting projects.
            </p>
            <Button variant="hero" size="lg">
              Get In Touch
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};