import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Skills from './pages/skills';
import QABestPractices from './pages/qa-best-practices';
import QATestUtilities from './pages/qa-test-utilities';
import { Toaster } from '@/components/ui/toaster';

import Beams from './components/Beams';

import React from 'react';
import TrueFocus from './components/TrueFocus';

function App() {
  const location = useLocation();
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/skills", label: "Skills" },
    { to: "/contact", label: "Contact" },
    { to: "/best-practices", label: "Best Practices" },
    { to: "/test-utilities", label: "Test Utilities" },
  ];

  return (
    <div style={{ position: 'relative', minHeight: '1vh' }}>
      <div 
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100vw', 
          height: '100vh',
          minHeight: '100dvh',
          zIndex: -1,
          willChange: 'auto',
          transform: 'translateZ(0)',
          overflow: 'hidden'
        }}
      >
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={15}
        />
      </div>
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <header className="w-full">
          <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
            <TrueFocus 
              sentence="Aaron_Southey Quality_Engineer"
              manualMode={false}
              blurAmount={5}
              borderColor="red"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
            {/* Desktop Nav */}
            <nav className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList>
                  {navLinks.map((link) => (
                    <NavigationMenuItem key={link.to}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={link.to}
                          className={`px-4 py-2 rounded-md transition-colors duration-200 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70
                            ${location.pathname === link.to
                              ? "bg-accent text-accent-foreground font-bold shadow-sm"
                              : "text-gray-300 hover:bg-muted hover:text-foreground"}`}
                        >
                          {link.label}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
            {/* Mobile Nav - Sheet Menu */}
            <div className="md:hidden">
              <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
                <SheetTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    aria-label="Open menu"
                    className="border-primary/20 bg-background/80 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/40 transition-all duration-200"
                  >
                    <Menu className="w-6 h-6 text-primary" />
                  </Button>
                </SheetTrigger>
                <SheetContent 
                  side="top" 
                  className="bg-black/20 backdrop-blur-sm border-b border-white/10 shadow-xl"
                >
                  <nav className="flex flex-col gap-3 mt-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setMobileNavOpen(false)}
                        className={`block px-6 py-3 rounded-lg font-medium transition-all duration-200 border
                          ${location.pathname === link.to
                            ? "bg-white/10 text-white border-white/20 font-bold shadow-sm"
                            : "text-gray-300 hover:bg-white/5 hover:text-white border-transparent hover:border-white/10"}`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>
        {/* Main content area with animated page transitions */}
        <main className={`flex-1 ${location.pathname === '/' ? 'bg-transparent shadow-none border-none p-0 max-w-none mx-0 rounded-none' : ''}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<div className="container mx-auto px-4 py-8 mb-12"><About /></div>} />
                <Route path="/projects" element={<div className="container mx-auto px-4 py-8 mb-12"><Projects /></div>} />
                <Route path="/skills" element={<div className="container mx-auto px-4 py-8 mb-12"><Skills /></div>} />
                <Route path="/contact" element={<div className="container mx-auto px-4 py-8 mb-12"><Contact /></div>} />
                <Route path="/best-practices" element={<div className="container mx-auto px-4 py-8 mb-12"><QABestPractices /></div>} />
                <Route path="/test-utilities" element={<div className="container mx-auto px-4 py-8 mb-12"><QATestUtilities /></div>} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </main>
        {/* Footer */}
        <footer className="w-full relative mt-12 z-10">
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'linear-gradient(90deg, rgba(30,41,59,0.7) 0%, rgba(30,41,59,0.4) 100%)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderTop: '1px solid rgba(255,255,255,0.08)',
          }} />
          <div className="relative z-10 text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-8 md:px-8" style={{ minHeight: '80px' }}>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
              <span className="font-semibold text-gray-400">&copy; {new Date().getFullYear()} <span className="text-gray-400">Aaron Southey</span></span>
              <span className="hidden md:inline text-gray-500">|</span>
              <span className="text-xs md:text-sm text-gray-400">Quality Engineer Portfolio</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/in/aaronsouthey/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="inline-block"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z"/></svg>
              </a>
              <a href="mailto:aaron.southey@gmail.com" aria-label="Email" className="hover:text-primary transition-colors">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="inline-block"><path d="M12 13.065l-11.985-8.065h23.97l-11.985 8.065zm-12-7.065v14h24v-14l-12 8.065-12-8.065z"/></svg>
              </a>
              <a href="https://github.com/aaron-southey" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="inline-block"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.588 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>
        </footer>
        {/* Toaster */}
        <Toaster />
      </div>
    </div>
  );
}

export default App;
