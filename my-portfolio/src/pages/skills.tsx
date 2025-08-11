import { motion } from 'framer-motion';
import MinimalDivider from '../components/MinimalDivider';

type SkillGroup = {
  label: string;
  items: string[];
};

const skillGroups: SkillGroup[] = [
  {
    label: "Languages & Frameworks",
    items: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "React",
      "Node.js",
      "SQL",
      "MongoDB",
    ],
  },
  {
    label: "Test Automation",
    items: [
      "Cypress",
      "Cypress Cloud",
      "Playwright",
      "Jest",
      "Cucumber",
      "Postman",
      "Pact",
      "Pactflow",
      "Grafana K6",
    ],
  },
  {
    label: "DevOps & CI/CD",
    items: [
      "CircleCI",
      "GitHub Actions",
      "GitLab CI",
      "Pipeline Architecture",
      "Docker",
      "Terraform",
      "Slack Reporting",
    ],
  },
  {
    label: "Platforms & Tooling",
    items: [
      "Linux",
      "Windows",
      "macOS",
      "GitHub",
      "GitLab",
      "Jira",
      "Azure DevOps",
      "Confluence",
      "NewRelic",
      "Sentry.io",
    ],
  },
  {
    label: "Practices & Concepts",
    items: [
      "Automation Strategy",
      "Test Architecture",
      "Shift-left Testing",
      "Quality Engineering",
      "Mentorship & Coaching",
      "QA Ways of Working",
      "Quality as a Culture",
    ],
  },
];

const Skills = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4">Skills</h1>
        <div className="text-minimal">Technical expertise & capabilities</div>
      </motion.div>

      <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500 max-w-4xl w-full">
        <p className="text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto text-lg font-light">
          I'm an Automation QA Engineer with a strong track record of designing and implementing scalable, maintainable test frameworks. I specialize in CI/CD pipelines, test automation, and modern QA practices, with deep expertise in Cypress, Playwright, and Jest.
        </p>

        <div className="space-y-12 w-full">
          {skillGroups.map((group, index) => (
            <section key={group.label}>
              <h3 className="text-xl font-medium mb-6 text-white">{group.label}</h3>
              <ul className="flex flex-wrap gap-3 justify-center">
                {group.items.map((skill) => (
                  <li key={skill}>
                    <span className="inline-block rounded-full bg-white/5 backdrop-blur-sm px-4 py-2 text-sm font-medium text-gray-300 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
              {index < skillGroups.length - 1 && (
                <div className="mt-8">
                  <MinimalDivider />
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Skills;
