import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

export default function Contact() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Get in Touch
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about engineering. Feel free to reach out!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="page-section">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-primary mb-8 text-center">
              Contact Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="mailto:foconno1@tcd.ie"
                className="flex items-start gap-6 p-8 bg-card rounded-lg border border-border hover:border-accent transition-colors group"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Mail size={28} className="text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-lg mb-1">Email</p>
                  <p className="text-muted-foreground">foconno1@tcd.ie</p>
                </div>
              </a>

              <a
                href="tel:+353874634990"
                className="flex items-start gap-6 p-8 bg-card rounded-lg border border-border hover:border-accent transition-colors group"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Phone size={28} className="text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-lg mb-1">Phone</p>
                  <p className="text-muted-foreground">+353 87 463 4990</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/finn-oconnor/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-6 p-8 bg-card rounded-lg border border-border hover:border-accent transition-colors group"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Linkedin size={28} className="text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-lg mb-1">LinkedIn</p>
                  <p className="text-muted-foreground">linkedin.com/in/finn-oconnor</p>
                </div>
              </a>

              <a
                href="https://github.com/finn0connor"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-6 p-8 bg-card rounded-lg border border-border hover:border-accent transition-colors group"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Github size={28} className="text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-lg mb-1">GitHub</p>
                  <p className="text-muted-foreground">github.com/finn0connor</p>
                </div>
              </a>

              <div className="flex items-start gap-6 p-8 bg-card rounded-lg border border-border md:col-span-2">
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin size={28} className="text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-lg mb-1">Location</p>
                  <p className="text-muted-foreground">Dublin, Ireland</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
