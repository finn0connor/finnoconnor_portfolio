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
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold text-primary mb-6 sm:mb-8 text-center">
              Contact Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <a
                href="mailto:foconno1@tcd.ie"
                className="flex flex-col sm:flex-row sm:items-start gap-4 p-4 sm:p-6 md:p-8 bg-card rounded-lg border border-border hover:border-accent transition-colors group"
              >
                <div className="w-12 sm:w-14 h-12 sm:h-14 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Mail size={24} className="text-accent" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground text-base sm:text-lg mb-1">Email</p>
                  <p className="text-muted-foreground text-sm break-all">foconno1@tcd.ie</p>
                </div>
              </a>

              <a
                href="tel:+353874634990"
                className="flex flex-col sm:flex-row sm:items-start gap-4 p-4 sm:p-6 md:p-8 bg-card rounded-lg border border-border hover:border-accent transition-colors group"
              >
                <div className="w-12 sm:w-14 h-12 sm:h-14 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Phone size={24} className="text-accent" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground text-base sm:text-lg mb-1">Phone</p>
                  <p className="text-muted-foreground text-sm">+353 87 463 4990</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/finn-oconnor/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row sm:items-start gap-4 p-4 sm:p-6 md:p-8 bg-card rounded-lg border border-border hover:border-accent transition-colors group"
              >
                <div className="w-12 sm:w-14 h-12 sm:h-14 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Linkedin size={24} className="text-accent" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground text-base sm:text-lg mb-1">LinkedIn</p>
                  <p className="text-muted-foreground text-sm break-all">linkedin.com/in/finn-oconnor</p>
                </div>
              </a>

              <a
                href="https://github.com/finn0connor"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row sm:items-start gap-4 p-4 sm:p-6 md:p-8 bg-card rounded-lg border border-border hover:border-accent transition-colors group"
              >
                <div className="w-12 sm:w-14 h-12 sm:h-14 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Github size={24} className="text-accent" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground text-base sm:text-lg mb-1">GitHub</p>
                  <p className="text-muted-foreground text-sm break-all">github.com/finn0connor</p>
                </div>
              </a>

              <div className="flex flex-col sm:flex-row sm:items-start gap-4 p-4 sm:p-6 md:p-8 bg-card rounded-lg border border-border md:col-span-2">
                <div className="w-12 sm:w-14 h-12 sm:h-14 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin size={24} className="text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-base sm:text-lg mb-1">Location</p>
                  <p className="text-muted-foreground text-sm">Dublin, Ireland</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
