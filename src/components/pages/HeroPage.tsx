import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Scene3D } from "@/components/3D/Scene3D";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-cosmic.jpg";

interface HeroPageProps {
  onNavigate: (page: string) => void;
}

export const HeroPage = ({ onNavigate }: HeroPageProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px]" />
      </div>

      {/* 3D Scene */}
      <div className="absolute inset-0 opacity-30">
        <Scene3D />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              damping: 10,
              stiffness: 100,
              delay: 0.5,
            }}
            className="relative mx-auto w-32 h-32 md:w-60 md:h-80"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cosmic-purple to-cosmic-blue p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-cosmic-cyan to-cosmic-blue flex items-center justify-center text-4xl font-bold text-white">
                <img
                  src="./src/assets/profile.jpg"
                  alt="Profile"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-4xl md:text-6xl lg:text-6xl font-bold gradient-text"
            >
              Muthu Krishnan R
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="space-y-2"
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground-secondary">
                Creative UI/UX Designer & Frontend Developer
              </h2>
              <p className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto">
                Crafting digital experiences with modern technologies and
                creative vision.
              </p>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              variant="hero"
              size="lg"
              onClick={() => onNavigate("contact")}
              className="group"
            >
              <Mail className="group-hover:animate-bounce" />
              Hire Me
            </Button>

            <Button
              variant="cosmic"
              size="lg"
              onClick={() => onNavigate("projects")}
              className="group"
            >
              View Projects
              <motion.div
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.div>
            </Button>
            <Button variant="glow" size="lg" asChild className="group">
              <a href="./src/assets/MyResume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="group-hover:animate-bounce" />
                Resume
              </a>
            </Button>
          </motion.div>

          {/* Quick Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: Github, href: "https://github.com/9342758154", label: "GitHub" },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/muthu-krishnan-r-468b5a335/",
                label: "LinkedIn",
              },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full glass text-foreground-secondary hover:text-primary transition-colors"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>

         
         
        </motion.div>
      </div>
    </section>
  );
};
