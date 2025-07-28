

// Removed unused Card imports for consistency
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <img
        src="/CF755E9F-7F0A-4DCE-BCDC-0A711B951C9B.jpg"
        alt="Profile placeholder"
        className="w-40 h-40 rounded-full mb-4 border-2 border-primary object-cover bg-muted"
        draggable={false}
      />
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome to my Portfolio</h1>
      <div className="text-muted-foreground mb-4">Quality Engineering | Automation | Modern QA</div>
      <p className="mb-6 text-lg text-muted-foreground">
        Automation QA Engineer with strong experience in Cypress, Playwright, CI/CD pipelines, and QA strategy. Skilled in designing robust automation frameworks and leading testing best practices across teams.
      </p>
      <p className="mb-6 text-lg text-muted-foreground">
        I build robust, scalable, and testable web solutions. Explore my projects, skills, and approach to quality engineering.
      </p>
      <div className="flex flex-col gap-2 md:flex-row md:justify-center">
        <Link to="/projects" className="inline-block px-6 py-2 rounded-md bg-primary text-primary-foreground font-semibold shadow hover:bg-primary/90 transition-colors">View Projects</Link>
        <Link to="/contact" className="inline-block px-6 py-2 rounded-md border border-primary text-primary font-semibold hover:bg-muted transition-colors">Contact Me</Link>
      </div>
    </main>
  );
};

export default Home;
