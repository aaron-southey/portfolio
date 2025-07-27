
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";
import { useState } from "react";
import { Menu } from "lucide-react";


import TestPlayground from './pages/test-playground';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Skills from './pages/skills';

function App() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/skills", label: "Skills" },
    { to: "/contact", label: "Contact" },
    { to: "/test-playground", label: "Test Playground" },
  ];
  return (
    <>
      {/* Professional header with site title and navigation */}
      <header className="w-full bg-background border-b border-border shadow-sm mb-8">
        <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
          <span className="text-xl font-bold tracking-tight text-primary select-none">Aaron Southey</span>
          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <NavigationMenu className="w-auto">
              <NavigationMenuList>
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.to}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={link.to}
                        className={`px-4 py-2 rounded-md transition-colors duration-200 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70
                          ${location.pathname === link.to
                            ? "bg-accent text-accent-foreground font-bold shadow-sm"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"}
                        `}
                        tabIndex={0}
                      >
                        {link.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
          {/* Mobile burger menu button */}
          <button
            className="md:hidden p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Open menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Menu className="w-6 h-6 text-primary" />
          </button>
        </div>
        {/* Mobile dropdown menu */}
        {menuOpen && (
          <nav className="md:hidden bg-background border-t border-border shadow animate-in fade-in slide-in-from-top-4">
            <ul className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`block w-full px-4 py-2 rounded-md transition-colors duration-200 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70
                      ${location.pathname === link.to
                        ? "bg-accent text-accent-foreground font-bold shadow-sm"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"}
                    `}
                    tabIndex={0}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test-playground" element={<TestPlayground />} />
      </Routes>
    </>
  );
}

export default App;
