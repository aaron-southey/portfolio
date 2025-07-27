

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card";

import { useToast } from "@/hooks/use-toast";


const Contact = () => {
  const { toast } = useToast();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast({
      title: "Contact form not available",
      description: "This contact form is not in operation. Please connect via LinkedIn.",
      variant: "destructive",
    });
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold">Contact</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" name="contact" autoComplete="off" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="px-4 py-2 rounded border border-border bg-background text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded border border-border bg-background text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="px-4 py-2 rounded border border-border bg-background text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              required
            />
            <button
              type="submit"
              className="self-end px-6 py-2 rounded-md bg-primary text-primary-foreground font-semibold shadow hover:bg-primary/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </CardContent>
      </Card>
      <a
        href="https://www.linkedin.com/in/aaron-southey-465001164/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-2 rounded-md border border-primary text-primary font-semibold hover:bg-muted transition-colors shadow"
        aria-label="Connect on LinkedIn"
      >
        <img src="/linkedin-square-logo-svgrepo-com.svg" alt="LinkedIn" width={24} height={24} className="inline-block" />
        <span>Connect on LinkedIn</span>
      </a>
    </main>
  );
};

export default Contact;
