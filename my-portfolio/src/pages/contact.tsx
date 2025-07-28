import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold">Contact</CardTitle>
        </CardHeader>
        <CardContent>
            <form
              action="https://formspree.io/f/xovlwnny"
              method="POST"
              className="space-y-4"
              name="contact"
            >
            <input type="hidden" name="form-name" value="contact" />

            <div className="space-y-1">
              <Label htmlFor="name">Your Name</Label>
              <Input type="text" id="name" name="name" required />
            </div>

            <div className="space-y-1">
              <Label htmlFor="email">Your Email</Label>
              <Input type="email" id="email" name="email" required />
            </div>

            <div className="space-y-1">
              <Label htmlFor="message">Your Message</Label>
              <Textarea id="message" name="message" rows={4} required />
            </div>

            <div className="flex justify-end">
              <Button type="submit">Send Message</Button>
            </div>
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
        <img
          src="/linkedin-square-logo-svgrepo-com.svg"
          alt="LinkedIn"
          width={24}
          height={24}
          className="inline-block"
        />
        <span>Connect on LinkedIn</span>
      </a>
    </main>
  );
};

export default Contact;
