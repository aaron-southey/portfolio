import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from 'framer-motion';
import MinimalDivider from '../components/MinimalDivider';
import LoadingButton from '../components/LoadingButton';
import ProgressiveText from '../components/ProgressiveText';
import { useState } from 'react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/xovlwnny', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        // Handle success
        e.currentTarget.reset();
      }
    } catch {
      // Handle error
    } finally {
      setTimeout(() => setIsSubmitting(false), 1000); // Minimum loading time for UX
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4">Contact</h1>
        <ProgressiveText 
          text="Let's start a conversation" 
          className="text-minimal" 
          delay={0.3}
          stagger={0.05}
        />
      </motion.div>

      <div className="w-full max-w-2xl bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500">
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          name="contact"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className="space-y-3">
            <Label htmlFor="name" className="text-gray-300 text-sm font-medium">Your Name</Label>
            <Input 
              type="text" 
              id="name" 
              name="name" 
              required 
              className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-white/40 focus:bg-white/10 transition-all" 
              placeholder="Enter your full name"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="email" className="text-gray-300 text-sm font-medium">Your Email</Label>
            <Input 
              type="email" 
              id="email" 
              name="email" 
              required 
              className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-white/40 focus:bg-white/10 transition-all"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="message" className="text-gray-300 text-sm font-medium">Your Message</Label>
            <Textarea 
              id="message" 
              name="message" 
              rows={5} 
              required 
              className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-white/40 focus:bg-white/10 transition-all resize-none" 
              placeholder="Tell me about your project or just say hello..."
            />
          </div>

          <div className="pt-4">
            <LoadingButton
              type="submit"
              variant="filled"
              className="w-full"
              isLoading={isSubmitting}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </LoadingButton>
          </div>
        </form>

        <div className="mt-8">
          <MinimalDivider />
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://www.linkedin.com/in/aaron-southey-465001164/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-minimal inline-flex items-center gap-2"
            aria-label="Connect on LinkedIn"
          >
            <img
              src="/linkedin-square-logo-svgrepo-com.svg"
              alt="LinkedIn"
              width={20}
              height={20}
              className="inline-block"
            />
            <span>Connect on LinkedIn</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Contact;
