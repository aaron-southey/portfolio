
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/card";

const About = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh]">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold">About Me</CardTitle>
          <CardDescription>Beyond the Code</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-muted-foreground">
            Hi, I'm Aaron. When I'm not working on quality engineering, you'll find me on the rugby field, building and racing cars, or enjoying a good gym session. I love a challenge - whether it's in sport, engineering, or life.
          </p>
          <p className="mb-2">I believe in living life with energy, curiosity, and a drive to improve. My passion for teamwork and performance on the field translates to my work and everything I do.</p>
        </CardContent>
        <CardFooter>
          <a
            href="/contact"
            className="ml-auto px-5 py-2 rounded-md bg-primary text-primary-foreground font-semibold shadow hover:bg-primary/90 transition-colors"
          >
            Get in touch
          </a>
        </CardFooter>
      </Card>
    </main>
  );
};

export default About;
