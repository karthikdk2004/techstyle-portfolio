
import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home", isRoute: true },
    { href: "#about", label: "About", isRoute: false },
    { href: "#skills", label: "Skills", isRoute: false },
    { href: "#projects", label: "Projects", isRoute: false },
    { href: "/why-hire-me", label: "Why Hire Me?", isRoute: true },
    { href: "#contact", label: "Contact", isRoute: false },
  ];

  const handleNavClick = (link: typeof navLinks[0]) => {
    if (link.isRoute) {
      return; // Let React Router handle it
    }
    
    // For anchor links, navigate to home first if not already there
    if (location.pathname !== "/") {
      window.location.href = "/" + link.href;
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-white font-heading font-bold text-xl hover:text-primary transition-colors group"
          >
            <Code2 className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-white">
              KARTHIK
            </span>
          </Link>

          <div className="flex items-center gap-4">
            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-white hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-white hover:text-primary transition-colors"
                    onClick={() => handleNavClick(link)}
                  >
                    {link.label}
                  </a>
                )
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="flex flex-col space-y-4 pt-4">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-white hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-white hover:text-primary transition-colors"
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleNavClick(link);
                    }}
                  >
                    {link.label}
                  </a>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
