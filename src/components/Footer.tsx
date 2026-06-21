
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-8 bg-black border-t border-white/5">
    <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-xs text-gray-600">
        © 2026 D. Karthik Reddy · Designed &amp; built by hand
      </p>
      <div className="flex items-center gap-5">
        <a
          href="https://github.com/karthikdk2004"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-white transition-colors"
          aria-label="GitHub"
        >
          <Github size={17} />
        </a>
        <a
          href="https://www.linkedin.com/in/karthik-reddy-devireddy-ab6927260/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-white transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={17} />
        </a>
        <a
          href="mailto:karthikreddy1420@gmail.com"
          className="text-gray-600 hover:text-white transition-colors"
          aria-label="Email"
        >
          <Mail size={17} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
