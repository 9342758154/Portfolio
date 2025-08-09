import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export const SkillsPage = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React/Next.js', level: 95, color: 'from-cosmic-blue to-cosmic-cyan' },
        { name: 'TypeScript', level: 90, color: 'from-cosmic-purple to-cosmic-blue' },
        { name: 'JavaScript', level: 95, color: 'from-cosmic-cyan to-cosmic-purple' },
        { name: 'HTML/CSS', level: 98, color: 'from-cosmic-pink to-cosmic-purple' },
        { name: 'Tailwind CSS', level: 92, color: 'from-cosmic-blue to-cosmic-pink' },
      ],
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', level: 85, color: 'from-cosmic-purple to-cosmic-cyan' },
        { name: 'Python', level: 80, color: 'from-cosmic-blue to-cosmic-purple' },
        { name: 'PostgreSQL', level: 88, color: 'from-cosmic-cyan to-cosmic-blue' },
        { name: 'MongoDB', level: 85, color: 'from-cosmic-pink to-cosmic-cyan' },
        { name: 'GraphQL', level: 75, color: 'from-cosmic-purple to-cosmic-pink' },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git/GitHub', level: 95, color: 'from-cosmic-blue to-cosmic-purple' },
        { name: 'Docker', level: 80, color: 'from-cosmic-cyan to-cosmic-pink' },
        { name: 'AWS/Cloud', level: 75, color: 'from-cosmic-purple to-cosmic-blue' },
        { name: 'Jest/Testing', level: 85, color: 'from-cosmic-pink to-cosmic-purple' },
        { name: 'Figma/Design', level: 90, color: 'from-cosmic-blue to-cosmic-cyan' },
      ],
    },
  ];

  const certifications = [
    'AWS Certified Developer Associate',
    'Google Cloud Professional Developer',
    'Meta Frontend Developer Professional',
    'Microsoft Azure Developer Associate',
  ];

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Skills & Expertise
          </h1>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and professional capabilities.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <Card className="glass p-6 h-full">
                <h2 className="text-xl font-bold text-glow mb-6 text-center">
                  {category.title}
                </h2>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1 
                      }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground-secondary">
                          {skill.name}
                        </span>
                        <span className="text-sm text-foreground-muted">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative">
                        <div className="h-2 bg-background-secondary rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ 
                              duration: 1.5, 
                              delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                              ease: "easeOut"
                            }}
                            className={`h-full bg-gradient-to-r ${skill.color} relative`}
                          >
                            <motion.div
                              animate={{ 
                                boxShadow: [
                                  '0 0 5px rgba(79, 195, 247, 0.5)',
                                  '0 0 20px rgba(79, 195, 247, 0.8)',
                                  '0 0 5px rgba(79, 195, 247, 0.5)',
                                ]
                              }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity,
                                delay: categoryIndex * 0.2 + skillIndex * 0.1 + 1
                              }}
                              className="absolute inset-0"
                            />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Card className="glass p-8 cosmic-bg">
            <h2 className="text-2xl font-bold text-center gradient-text mb-8">
              Certifications & Achievements
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="flex items-center space-x-3 p-4 rounded-lg bg-background/20 backdrop-blur-sm border border-primary/20"
                >
                  <div className="w-3 h-3 bg-primary rounded-full glow-primary flex-shrink-0" />
                  <span className="text-foreground-secondary font-medium">
                    {cert}
                  </span>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Fun Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          {[
            { number: '50+', label: 'Projects Completed' },
            { number: '4+', label: 'Years Experience' },
            { number: '15+', label: 'Technologies Mastered' },
            { number: '100%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <Card key={stat.label} className="glass p-6 text-center hover-lift">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring", 
                  damping: 15, 
                  delay: 1.4 + index * 0.1 
                }}
                className="text-2xl md:text-3xl font-bold gradient-text mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-sm text-foreground-muted">
                {stat.label}
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};