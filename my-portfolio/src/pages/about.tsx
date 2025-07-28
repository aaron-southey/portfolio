

import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <img
        src="/CF755E9F-7F0A-4DCE-BCDC-0A711B951C9B.jpg"
        alt="Profile placeholder"
        className="w-40 h-40 rounded-full mb-4 border-2 border-primary object-cover bg-muted"
        draggable={false}
      />
      <h1 className="text-2xl md:text-3xl font-bold mb-2">About Me</h1>
      <div className="text-muted-foreground mb-4">Beyond the Code</div>
      <p className="mb-4 text-muted-foreground">
        Hi, I'm Aaron. When I'm not working on quality engineering, you'll find me on the rugby field, building and racing cars, or enjoying a good gym session. I love a challenge - whether it's in sport, engineering, or life.
      </p>
      <p className="mb-2">
        I believe in living life with energy, curiosity, and a drive to improve. My passion for teamwork and performance on the field translates to my work and everything I do.
      </p>
      <div className="flex flex-col gap-2 md:flex-row md:justify-center mt-4">
        <Link
          to="/skills"
          className="px-5 py-2 rounded-md border border-primary text-primary font-semibold hover:bg-muted transition-colors"
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
    </main>
  );
};

export default About;
