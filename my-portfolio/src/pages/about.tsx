

import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-lg p-8 max-w-2xl w-full">
        <img
          src="/CF755E9F-7F0A-4DCE-BCDC-0A711B951C9B.jpg"
          alt="Profile placeholder"
          className="w-40 h-40 rounded-full mb-6 border-2 border-primary object-cover bg-muted mx-auto"
          draggable={false}
        />
        <h1 className="text-2xl md:text-3xl font-bold mb-2 text-white">About Me</h1>
        <div className="text-gray-300 mb-6">Beyond the Code</div>
        <p className="mb-4 text-gray-200 leading-relaxed">
          Hi, I'm Aaron. When I'm not working on quality engineering, you'll find me on the rugby field, building and racing cars, or enjoying a good gym session. I love a challenge - whether it's in sport, engineering, or life.
        </p>
        <p className="mb-6 text-gray-200 leading-relaxed">
          I believe in living life with energy, curiosity, and a drive to improve. My passion for teamwork and performance on the field translates to my work and everything I do.
        </p>
        <div className="flex flex-col gap-3 md:flex-row md:justify-center">
          <Link
            to="/skills"
            className="px-5 py-2 rounded-md border-2 border-white bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white hover:text-black transition-all duration-300"
          >
            Technical Skills
          </Link>
          <Link
            to="/contact"
            className="px-5 py-2 rounded-md bg-primary text-primary-foreground font-semibold shadow hover:bg-primary/90 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </main>
  );
};

export default About;
