import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { a } from 'node_modules/framer-motion/dist/types.d-Cjd591yU';

export const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: 'Secure Real-Time Chat Application',
      description: 'Developed a real-time chat app with Django Channels and WebSocket.Integrated secure end-to-end encryption (XChaCha20-Poly1305),bcrypt-based user authentication, and MySQL for encrypted data storage.',
      tech: ["ReactJS"," Django"," Django Channels", "WebSocket", "XChaCha20-Poly1305"],
      gradient: 'from-cosmic-purple to-cosmic-blue',
    },
    {
      id: 2,
      title: 'Flute(Music App)',
      description: 'The main reason for developing a Flute app is to provide easy,on-demand access to music while offering a legal and monetized platform for artists,creators and the million of peoples stress buster. ',
      tech: ['Figma','Miro','Sketch','Penpot','Adobe XD'],
      gradient: 'from-cosmic-cyan to-cosmic-blue',
    },
    {
      id: 3,
      title: '3D Portfolio Website',
      description: 'Interactive 3D portfolio website built with Three.js and React Three Fiber.',
      tech: ['React', 'Three.js', 'Framer Motion', 'React.js', 'Tailwind CSS'],
      gradient: 'from-cosmic-pink to-cosmic-purple',
    },
    {
      id: 4,
      title: 'Developer hub tool Website',
      description: ' Developed for Software Developers to learn and implementation of Idea. ',
      tech: ['HTML', 'CSS', 'JavaScript', ],
      gradient: 'from-cosmic-blue to-cosmic-cyan',
    },
    {
      id: 5,
      title: 'Food Ordering Website - Foodies Corner',
      description: 'Developed a responsive multi-page food ordering website with cart functionality, user auth, carousels, and social media links.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      gradient: 'from-cosmic-purple to-cosmic-pink',
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
                    </Button>
                    
                    <Button
                      variant="glow"
                      size="sm"
                      className="flex-1 group/btn"
                      asChild
                    >
                
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