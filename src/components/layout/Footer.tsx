import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4 text-primary-foreground">
              Finn O'Connor
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              MAI (MEng) Master of Mechanical and Manufacturing Engineering
              <br />
              Trinity College Dublin, The University of Dublin
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/projects" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/cv" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  CV / Resume
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/finn0connor"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded hover:bg-primary-foreground/20 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/finnoconnor"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:finn@example.com"
                className="p-2 bg-primary-foreground/10 rounded hover:bg-primary-foreground/20 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
