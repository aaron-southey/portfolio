

import { motion } from 'framer-motion';

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
    <main className="flex flex-col items-center justify-center min-h-[60vh] px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4">Projects</h1>
        <div className="text-minimal">Crafted with attention to detail</div>
      </motion.div>

      <div className="grid gap-8 w-full max-w-5xl md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500 group cursor-pointer"
            onClick={() => window.open(project.link, "_blank")}
          >
            <h3 className="text-xl font-medium text-white mb-4 group-hover:text-gray-100 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed text-sm">
              {project.description}
            </p>
            <div className="flex justify-between items-center">
              <div className="text-minimal">Click to explore</div>
              <div className="text-xs text-gray-500">↗</div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;