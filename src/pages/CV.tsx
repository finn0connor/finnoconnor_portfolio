import { Download, ExternalLink, Mail, MapPin, Phone, Calendar, Briefcase, GraduationCap, Award } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

export default function CV() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
                Curriculum Vitae
              </h1>
              <p className="text-muted-foreground">
                Last updated: December 2024
              </p>
            </div>
            <a
              href="/cv/Finn_OConnor_CV.pdf"
              download
              className="btn-primary inline-flex items-center gap-2 self-start"
            >
              <Download size={18} />
              Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* CV Content */}
      <section className="page-section">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            {/* Header / Contact */}
            <div className="bg-card rounded-lg p-8 border border-border mb-8">
              <h2 className="font-serif text-3xl font-bold text-primary mb-2">Finn O'Connor</h2>
              <p className="text-lg text-accent mb-6">MAI (MEng) Mechanical & Manufacturing Engineering</p>
              
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail size={16} />
                  <a href="mailto:foconno1@tcd.ie" className="hover:text-accent transition-colors">
                    foconno1@tcd.ie
                  </a>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone size={16} />
                  <span>+353 87 463 4990</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={16} />
                  <span>Dublin, Ireland</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <ExternalLink size={16} />
                  <a href="https://www.linkedin.com/in/finn-oconnor/" className="hover:text-accent transition-colors">
                    linkedin.com/in/finn-oconnor
                  </a>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="mb-10">
              <h3 className="font-serif text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-accent/10 rounded flex items-center justify-center">
                  <Briefcase size={16} className="text-accent" />
                </span>
                Objective
              </h3>
              <p className="text-muted-foreground leading-relaxed pl-10">
                [Add a 2-3 sentence professional summary highlighting your key strengths, 
                experience, and what you're looking for. Make it compelling and specific to your target roles.]
              </p>
            </div>

            {/* Education */}
            <div className="mb-10">
              <h3 className="font-serif text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-accent/10 rounded flex items-center justify-center">
                  <GraduationCap size={16} className="text-accent" />
                </span>
                Education
              </h3>
              <div className="pl-10 space-y-6">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h4 className="font-semibold text-foreground">
                      Master of Engineering - MAI (MEng), Mechanical & Manufacturing Engineering
                    </h4>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar size={14} />
                      2022 – 2027
                    </span>
                  </div>
                  <p className="text-accent text-sm mb-2">Trinity College Dublin, The University of Dublin</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Thesis: [Your thesis topic]</li>
                    <li>Relevant coursework: [Key modules]</li>
                    <li>Grade: First Class Honours (1.1)</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h4 className="font-semibold text-foreground">
                      Bachelor of Engineering - BEng (Hons), Mechanical & Manufacturing Engineering
                    </h4>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar size={14} />
                      [Years]
                    </span>
                  </div>
                  <p className="text-accent text-sm mb-2">Trinity College Dublin, The University of Dublin</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>[Key achievement or focus area]</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="mb-10">
              <h3 className="font-serif text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-accent/10 rounded flex items-center justify-center">
                  <Briefcase size={16} className="text-accent" />
                </span>
                Experience
              </h3>
              <div className="pl-10 space-y-6">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h4 className="font-semibold text-foreground">[Job Title]</h4>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar size={14} />
                      [Date Range]
                    </span>
                  </div>
                  <p className="text-accent text-sm mb-2">[Company Name] — [Location]</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>[Achievement or responsibility with quantified impact]</li>
                    <li>[Another achievement or responsibility]</li>
                    <li>[Another achievement or responsibility]</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h4 className="font-semibold text-foreground">[Previous Job Title]</h4>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar size={14} />
                      [Date Range]
                    </span>
                  </div>
                  <p className="text-accent text-sm mb-2">[Company Name] — [Location]</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>[Achievement or responsibility]</li>
                    <li>[Achievement or responsibility]</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-10">
              <h3 className="font-serif text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-accent/10 rounded flex items-center justify-center">
                  <Award size={16} className="text-accent" />
                </span>
                Technical Skills
              </h3>
              <div className="pl-10 grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2 text-sm">CAD & Design</h4>
                  <p className="text-sm text-muted-foreground">
                    SolidWorks, Fusion 360, AutoCAD, CATIA
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2 text-sm">Analysis & Simulation</h4>
                  <p className="text-sm text-muted-foreground">
                    ANSYS, Abaqus, LS-DYNA, MATLAB
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2 text-sm">Programming</h4>
                  <p className="text-sm text-muted-foreground">
                    Python, JavaScript, TypeScript, SQL
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2 text-sm">Manufacturing</h4>
                  <p className="text-sm text-muted-foreground">
                    CNC, 3D Printing, Injection Molding, GD&T
                  </p>
                </div>
              </div>
            </div>

            {/* Projects Summary */}
            <div className="mb-10">
              <h3 className="font-serif text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-accent/10 rounded flex items-center justify-center">
                  <Briefcase size={16} className="text-accent" />
                </span>
                Key Projects
              </h3>
              <div className="pl-10">
                <p className="text-sm text-muted-foreground mb-4">
                  See the <a href="/projects" className="text-accent hover:underline">Projects page</a> for 
                  detailed documentation of all engineering projects.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li><span className="text-foreground font-medium">Automated Assembly Line Design</span> — Reduced assembly time by 40%</li>
                  <li><span className="text-foreground font-medium">CNC Optimization Tool</span> — 25% reduction in machining cycle time</li>
                  <li><span className="text-foreground font-medium">Thermal Analysis of Heat Exchanger</span> — 15% improved thermal efficiency</li>
                </ul>
              </div>
            </div>

            {/* Download CTA */}
            <div className="bg-secondary/50 rounded-lg p-6 text-center">
              <p className="text-muted-foreground mb-4">
                Download the complete CV as a PDF for your records.
              </p>
              <a
                href="/cv/Finn_OConnor_CV.pdf"
                download
                className="btn-primary inline-flex items-center gap-2"
              >
                <Download size={18} />
                Download PDF Version
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
