

import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const projects = [
  {
    title: "E2E Automation Framework",
    description: "A scalable, maintainable E2E test framework using Cypress and Playwright for a large SaaS platform.",
    link: "#"
  },
  {
    title: "CI/CD Quality Gates",
    description: "Integrated automated tests into CI/CD pipelines with Cypress Cloud and GitHub Actions.",
    link: "#"
  },
  {
    title: "Component Library QA",
    description: "Developed reusable test utilities and patterns for a React component library using Jest and Playwright.",
    link: "#"
  }
];


const Projects = () => {
  const { toast } = useToast();
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="grid gap-6 w-full max-w-4xl md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <button
                type="button"
                className="ml-auto px-4 py-2 rounded-md bg-primary text-primary-foreground font-semibold shadow hover:bg-primary/90 transition-colors"
                onClick={() => toast({
                  title: "Warning!",
                  description: "Chris Hansen is on his way",
                })}
              >
                View Project
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default Projects;