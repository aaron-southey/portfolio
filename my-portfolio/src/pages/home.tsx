

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh]">
      <Card className="w-full max-w-2xl text-center">
        <CardHeader className="flex flex-col items-center">
          <img
            src="/CF755E9F-7F0A-4DCE-BCDC-0A711B951C9B.jpg"
            alt="Profile placeholder"
            className="w-40 h-40 rounded-full mb-4 border-2 border-primary object-cover bg-muted"
            draggable={false}
          />
          <CardTitle className="text-3xl md:text-4xl font-bold">Welcome to my Portfolio</CardTitle>
          <CardDescription>Quality Engineering | Automation | Modern QA</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-lg text-muted-foreground">
            Automation QA Engineer with strong experience in Cypress, Playwright, CI/CD pipelines, and QA strategy. Skilled in designing robust automation frameworks and leading testing best practices across teams.
          </p>
        </CardContent>
        <CardContent>
          <p className="mb-6 text-lg text-muted-foreground">
            I build robust, scalable, and testable web solutions. Explore my projects, skills, and approach to quality engineering.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 md:flex-row md:justify-center">
          <Link to="/projects" className="inline-block px-6 py-2 rounded-md bg-primary text-primary-foreground font-semibold shadow hover:bg-primary/90 transition-colors">View Projects</Link>
          <Link to="/contact" className="inline-block px-6 py-2 rounded-md border border-primary text-primary font-semibold hover:bg-muted transition-colors">Contact Me</Link>
        </CardFooter>
      </Card>
    </main>
  );
};

export default Home;
