
import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { href: "#about", label: "About", sectionId: "about" },
  { href: "#skills", label: "Skills", sectionId: "skills" },
  { href: "#projects", label: "Projects", sectionId: "projects" },
  { href: "#contact", label: "Contact", sectionId: "contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (!isHome) return;

      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollY = window.scrollY + 120;

      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && scrollY >= el.offsetTop) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const handleAnchorClick = (e: React.MouseEvent, href: string) => {
    if (!isHome) {
      e.preventDefault();
      window.location.href = "/" + href;
    }
    setIsMenuOpen(false);
  };

  const linkClass = (sectionId: string) =>
    `text-sm font-medium transition-colors duration-200 ${
      activeSection === sectionId && isHome
        ? "text-primary"
        : "text-gray-400 hover:text-white"
    }`;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#080d18]/95 backdrop-blur-xl border-b border-white/8" : "bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="text-white font-black text-lg tracking-tight hover:text-primary transition-colors"
            aria-label="D. Karthik Reddy — Home"
          >
            KR<span className="text-primary">.</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={linkClass(link.sectionId)}
                onClick={(e) => handleAnchorClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}

            {/* Social icons */}
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-white/10">
              <a
                href="https://github.com/karthikdk2004"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:bg-white/8 p-1.5 rounded-md transition-colors"
                aria-label="GitHub profile"
              >
                <Github size={17} />
              </a>
              <a
                href="https://www.linkedin.com/in/karthik-reddy-devireddy-ab6927260/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:bg-white/8 p-1.5 rounded-md transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={17} />
              </a>
            </div>

            <a
              href="#contact"
              onClick={(e) => handleAnchorClick(e, "#contact")}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Get in touch
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-gray-400 hover:text-white transition-colors p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden pt-4 pb-2 border-t border-white/5 mt-4">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`py-2.5 px-2 rounded-lg ${linkClass(link.sectionId)} hover:bg-white/5`}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-3 mt-2 border-t border-white/5 px-2">
                <a
                  href="https://github.com/karthikdk2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/karthik-reddy-devireddy-ab6927260/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
