import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

// Define the props interface
interface NavbarProps {
  personalInfo: {
    name: string;
    // Add other relevant fields from personalInfo if needed for the navbar
  };
}

const Navbar = ({ personalInfo }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const checkDarkMode = () => {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        setIsDarkMode(true);
        document.documentElement.classList.add("dark");
      } else {
        setIsDarkMode(false);
        document.documentElement.classList.remove("dark");
      }
    };

    checkDarkMode();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setIsDarkMode(true);
    }
  };

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-navy/90 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <span className="text-green text-3xl font-bold">
            {personalInfo.name.charAt(0).toUpperCase()}
          </span>
          <span className="text-xl font-medium dark:text-white">
            {personalInfo.name.split(' ')[0]}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="nav-link">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="rounded-full"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <SunIcon className="h-5 w-5 text-green" />
            ) : (
              <MoonIcon className="h-5 w-5 text-green" />
            )}
          </Button>

          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="border-green text-green hover:bg-green/10"
            >
              Resume
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="rounded-full"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <SunIcon className="h-5 w-5 text-green" />
            ) : (
              <MoonIcon className="h-5 w-5 text-green" />
            )}
          </Button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1">
              <span
                className={`block h-0.5 bg-foreground transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-foreground transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-foreground transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-navy shadow-lg p-4">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="nav-link block py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  variant="outline"
                  className="border-green text-green hover:bg-green/10 w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Resume
                </Button>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
