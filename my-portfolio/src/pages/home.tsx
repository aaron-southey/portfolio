
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/card";

const Home: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh]">
      <Card className="w-full max-w-2xl text-center">
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold">Welcome to my Portfolio</CardTitle>
          <CardDescription>Quality Engineering | Automation | Modern Web QA</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-lg text-muted-foreground">
            I build robust, scalable, and testable web solutions. Explore my projects, skills, and approach to quality engineering.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 md:flex-row md:justify-center">
          <a href="/projects" className="inline-block px-6 py-2 rounded-md bg-primary text-primary-foreground font-semibold shadow hover:bg-primary/90 transition-colors">View Projects</a>
          <a href="/contact" className="inline-block px-6 py-2 rounded-md border border-primary text-primary font-semibold hover:bg-muted transition-colors">Contact Me</a>
        </CardFooter>
      </Card>
    </main>
  );
};

export default Home;
