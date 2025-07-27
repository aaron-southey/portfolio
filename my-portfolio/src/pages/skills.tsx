
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const skills = [
  "JavaScript",
  "TypeScript",
  "Cypress & Cypress Cloud",
  "Playwright",
  "Jest",
  "CI/CD Integration",
  "Test Automation",
  "Quality Engineering",
  "K6",
  "Pact and Pactflow",
  "API Testing",
  "Java",
  "React",
  "Node.js",
  "GitHub Actions",
  "Docker",];

const Skills = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh]">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold">Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-muted-foreground text-center">
            I am extremely well versed in CI/CD and specialize in building test frameworks that scale with their applications. My focus is on automation, maintainability, and seamless integration with modern development and deployment pipelines.
          </p>
          <p className="mb-4 text-muted-foreground text-center">
            I believe in quality as a culture, not just a process. My focus is on delivering reliable, high-quality software through automation, CI/CD, and modern QA practices. I have deep experience with Cypress, Playwright, and Jest, and love building robust, maintainable test suites for scalable web apps.
          </p>
          <ul className="flex flex-wrap gap-3 justify-center mt-2">
            {skills.map((skill) => (
              <li key={skill}>
                <span className="inline-block rounded-full bg-muted px-4 py-2 text-sm font-medium text-foreground border border-border shadow-sm">
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </main>
  );
};

export default Skills;
