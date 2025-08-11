import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] gap-8">
      <div className="w-full max-w-2xl bg-black/40 backdrop-blur-md border border-white/20 rounded-lg p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-white text-center">Contact</h1>
        <form
          action="https://formspree.io/f/xovlwnny"
          method="POST"
          className="space-y-4"
          name="contact"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-200">Your Name</Label>
            <Input type="text" id="name" name="name" required className="bg-black/20 border-white/30 text-white placeholder:text-gray-400" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-200">Your Email</Label>
            <Input type="email" id="email" name="email" required className="bg-black/20 border-white/30 text-white placeholder:text-gray-400" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-gray-200">Your Message</Label>
            <Textarea id="message" name="message" rows={4} required className="bg-black/20 border-white/30 text-white placeholder:text-gray-400" />
          </div>

          <div className="flex justify-end pt-2">
            <Button type="submit">Send Message</Button>
          </div>
        </form>
      </div>

      <a
        href="https://www.linkedin.com/in/aaron-southey-465001164/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-2 rounded-md border-2 border-white bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 shadow"
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
