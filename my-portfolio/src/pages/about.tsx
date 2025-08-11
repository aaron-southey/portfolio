

import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import MinimalDivider from '../components/MinimalDivider';
import LoadingImage from '../components/LoadingImage';

const About = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4">About</h1>
        <div className="text-minimal">Beyond the code</div>
      </motion.div>

      <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500 max-w-3xl w-full">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ filter: "grayscale(0%)" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="mb-8"
          >
            <LoadingImage
              src="/CF755E9F-7F0A-4DCE-BCDC-0A711B951C9B.jpg"
              alt="Profile"
              className="w-32 h-32 rounded-full border border-white/20 object-cover mx-auto grayscale hover:grayscale-0 transition-all duration-300"
              skeletonClassName="w-32 h-32 rounded-full mx-auto"
              loading="eager"
              draggable={false}
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6 text-center"
          >
            <p className="text-gray-300 leading-relaxed text-lg font-light">
              Hi, I'm Aaron. When I'm not working on quality engineering, you'll find me on the rugby field, building and racing cars, or enjoying a good gym session.
            </p>
            
            <MinimalDivider className="my-8" />
            
            <p className="text-gray-400 leading-relaxed">
              I believe in living life with energy, curiosity, and a drive to improve. My passion for teamwork and performance on the field translates to my work and everything I do.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col gap-4 md:flex-row md:gap-6 mt-12"
          >
            <Link to="/skills" className="btn-minimal">
              Technical Skills
            </Link>
            <Link to="/contact" className="btn-minimal-filled">
              Get in touch
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default About;
