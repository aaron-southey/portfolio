// Removed unused Card imports for consistency

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
    <main className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-2xl md:text-3xl font-bold mb-2">Skills</h1>
      <p className="text-muted-foreground mb-8">
        I’m an Automation QA Engineer with a strong track record of designing and implementing scalable, maintainable test frameworks. I specialize in CI/CD pipelines, test automation, and modern QA practices, with deep expertise in Cypress, Playwright, and Jest. I focus on driving quality as a culture; embedding automation, reliability, and best practices into development workflows while mentoring teams and optimizing test strategies for high-performing software delivery.
      </p>

      <div className="space-y-8 w-full max-w-3xl mx-auto">
        {skillGroups.map((group) => (
          <section key={group.label}>
            <h3 className="text-lg font-semibold mb-3">{group.label}</h3>
            <ul className="flex flex-wrap gap-2 justify-center">
              {group.items.map((skill) => (
                <li key={skill}>
                  <span className="inline-block rounded-full bg-muted px-3 py-1.5 text-sm font-medium text-foreground border border-border shadow-sm">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Skills;
