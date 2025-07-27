

import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

const projects = [
  {
    title: "This Portfolio!",
    description:
      "A modern, responsive personal portfolio built with Vite + React, featuring clean UI components and CI/CD deployment via Vercel.",
    link: "https://github.com/aaron-southey/portfolio",
  },
  {
    title: "Cypress TypeScript Framework",
    description:
      "A scalable, maintainable E2E testing framework using Cypress and TypeScript, designed for robust and scalable test automation.",
    link: "https://github.com/aaron-southey/cypress-typescript",
  },
  {
    title: "Test Data Generation Utilities",
    description:
      "Reusable test utilities and data generation patterns, designed to be ingested by a node package manager for easy integration into projects.",
    link: "https://github.com/aaron-southey/test-utils",
  },
{
  title: "*In Progress* Playwright C# Framework",
  description: "A cross-browser automated testing framework using Playwright with C#, integrated into CI/CD pipelines for scalable test execution.",
  link: "https://github.com/aaron-southey/playwright-csharp",
}

];


const Projects = () => {
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
                onClick={() => window.open(project.link, "_blank")}
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