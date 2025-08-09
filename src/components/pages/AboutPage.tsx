import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const AboutPage = () => {
  const timeline = [
    {
      year: "2024",
      title: "Frontend Developer",
      experience: "Fresher",
      description:
        "Leading frontend architecture for next-generation web applications",
    },
    {
      year: "2024",
      title: "UI/UX Designer",
      experience: "Fresher",
      description:
        "A UI/UX Developer blends creativity and technology to design visually appealing, user-friendly, and responsive interfaces.",
    },
  ];

  const interests = [
    "3D Graphics",
    "Web3 Technologies",
    "Mobile App Design",
    "UI/UX Design",
    "Open Source",
    "Web Design",
    "Artificial Intelligence",
    "Sports"
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
            About Me
          </h1>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Passionate developer with a love for creating beautiful, functional,
            and user-centered digital experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="glass p-8 h-full">
              <h2 className="text-2xl font-bold text-glow mb-6">My Journey</h2>
              <div className="space-y-4 text-foreground-secondary">
                <p>
                  A Motivated and detail-focused Computer Science Engineering
                  graduate with strong skills in frontend development and UI/UX
                  design.
                </p>
                 <p>
                  Experienced in tools like Figma,Miro, and Penpot. Passionate
                  about solving problems using both technical and creative
                  approaches. Seeking opportunities to grow as a Frontend
                  developer.
                </p>
                <p>
                  Proficient in HTML, CSS, and JavaScript; currently enhancing
                  expertise in ReactJS and Python backend development(Learning).
                </p>
               
              </div>
            </Card>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="glass p-8 h-full">
              <h2 className="text-2xl font-bold text-glow mb-6">
                Interests & Passions
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <Badge
                      variant="secondary"
                      className="w-full p-3 text-center cosmic-bg"
                    >
                      {interest}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">
            Professional Timeline
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cosmic-purple via-cosmic-blue to-cosmic-cyan"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`lg:w-1/2 ${
                      index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"
                    }`}
                  >
                    <Card className="glass p-6 hover-lift">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="glow-primary">
                            {item.year}
                          </Badge>
                          <h3 className="text-xl font-bold text-primary">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-lg font-semibold text-foreground-secondary">
                          {item.experience}
                        </p>
                        <p className="text-foreground-muted">
                          {item.description}
                        </p>
                      </div>
                    </Card>
                  </div>

                  <div className="lg:w-1/2 flex justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full glow-primary relative z-10"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
