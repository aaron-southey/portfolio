

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProfileCard from '../components/ProfileCard';
import SplitText from '../components/SplitText';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Profile Card */}
      <section className="relative h-screen overflow-hidden flex items-start justify-center pt-16">
        <ProfileCard
          name="Aaron Southey"
          title="Quality Engineer"
          handle="aaronsouthey"
          status="Available"
          contactText="Contact Me"
          avatarUrl="/CF755E9F-7F0A-4DCE-BCDC-0A711B951C9B.jpg"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={handleContactClick}
        />
        
        <div className="absolute inset-0 flex items-end justify-center pb-40 pointer-events-none">
          {/* Cool Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 1, ease: "backOut" }}
            className="z-10 pointer-events-auto"
          >
          <div className="relative">
            {/* Outer glow ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-16 h-16 rounded-full border border-white/20"
            />
            
            {/* Pulsing center */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center"
            >
              {/* Arrow */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-white flex items-center justify-center"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="block">
                  <path 
                    d="M7 10L12 15L17 10" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </motion.div>
            
            {/* Particle effect */}
            <motion.div
              animate={{ 
                scale: [0, 1, 0],
                opacity: [0, 0.6, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeOut",
                times: [0, 0.3, 1]
              }}
              className="absolute inset-0 w-16 h-16 rounded-full border-2 border-white/40"
            />
          </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-4 relative">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>
        <div className="max-w-4xl mx-auto relative z-10 py-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <SplitText
              text="Welcome to my Portfolio"
              className="text-3xl md:text-6xl font-bold mb-6 whitespace-nowrap text-white"
              delay={50}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.8}
              rootMargin="100px"
              textAlign="center"
            />
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-200">
              <p>
                Automation QA Engineer with strong experience in Cypress, Playwright, CI/CD pipelines, and QA strategy. 
                Skilled in designing robust automation frameworks and leading testing best practices across teams.
              </p>
              <p>
                I build robust, scalable, and testable web solutions. Explore my projects, skills, and approach to quality engineering.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 md:flex-row md:justify-center"
          >
            <Link 
              to="/projects" 
              className="inline-block px-8 py-3 rounded-md bg-primary text-primary-foreground font-semibold shadow hover:bg-primary/90 transition-colors text-center"
            >
              View Projects
            </Link>
            <Link 
              to="/contact" 
              className="inline-block px-8 py-3 rounded-md border-2 border-white bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 text-center"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
