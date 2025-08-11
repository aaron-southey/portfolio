

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
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">Projects</h1>
      <div className="grid gap-8 w-full max-w-4xl md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.title} className="bg-black/40 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:bg-black/50 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
            <p className="text-gray-200 mb-6 leading-relaxed">{project.description}</p>
            <div className="flex justify-end">
              <button
                type="button"
                className="px-4 py-2 rounded-md bg-primary text-primary-foreground font-semibold shadow hover:bg-primary/90 transition-colors"
                onClick={() => window.open(project.link, "_blank")}
              >
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;