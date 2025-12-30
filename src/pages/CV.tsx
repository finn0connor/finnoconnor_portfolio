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
                Last updated: December 2025
              </p>
            </div>
            <a
              href="/finnoconnor_portfolio/cv/Finn_OConnor_CV.pdf"
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
                Master of Mechanical Engineering student with strong technical foundations in CAD, simulation, and programming. 
                Seeking opportunities to apply engineering expertise in mechanical design, analysis, and manufacturing optimization. 
                Demonstrated experience in aerospace design, thermal systems, and interdisciplinary engineering problem-solving.
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
                      Sept 2022 – May 2027
                    </span>
                  </div>
                  <p className="text-accent text-sm mb-2">Trinity College Dublin, The University of Dublin</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Relevant Coursework: Engineering Mathematics, Probability & Statistics, Computational Science, Materials Science, Fluid Mechanics, Thermodynamics, Heat Transfer, Signals and Systems, Multibody Dynamics, Mechanics of Solids, Research Methods</li>
                    <li>Activities: Trinity Student Managed Fund, Formula Trinity, DUFC (Trinity Rugby), EngSoc</li>
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
                    <h4 className="font-semibold text-foreground">Mechanical Engineering Intern</h4>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar size={14} />
                      May 2025 – Aug 2025
                    </span>
                  </div>
                  <p className="text-accent text-sm mb-2">Kirby Group Engineering — Dublin, Ireland</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Contributed to the development of AstraZeneca Alexion's new pharmaceutical manufacturing facility</li>
                    <li>Prepared and revised pipe network designs, produced redlines, isometrics, and P&IDs for client submission</li>
                    <li>Applied knowledge in fluid mechanics, thermodynamics, and CAD; built skills in Excel, Revit, and BlueBeam</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h4 className="font-semibold text-foreground">Drivetrain Engineer</h4>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar size={14} />
                      Oct 2024 – Present
                    </span>
                  </div>
                  <p className="text-accent text-sm mb-2">Formula Trinity — Dublin, Ireland</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Designed and simulated drivetrain components using SolidWorks and ANSYS for Trinity's Formula Student team</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h4 className="font-semibold text-foreground">Quantitative Trader & Analyst</h4>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar size={14} />
                      Feb 2023 – Present
                    </span>
                  </div>
                  <p className="text-accent text-sm mb-2">Trinity Student Managed Fund — Dublin, Ireland</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Helped design systematic trading strategies in Python & MATLAB, backtested with market APIs</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h4 className="font-semibold text-foreground">Spring Insight Participant</h4>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar size={14} />
                      Feb 2024
                    </span>
                  </div>
                  <p className="text-accent text-sm mb-2">Susquehanna International Group (SIG) — Dublin, Ireland</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Gained exposure to proprietary trading, options market making, and SIG's probabilistic decision-making methods</li>
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
                Technical Skills & Platforms
              </h3>
              <div className="pl-10 grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-foreground mb-2 text-sm">CAD & Design</h4>
                  <p className="text-sm text-muted-foreground">
                    SolidWorks, Fusion 360, AutoCAD, Revit
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2 text-sm">Simulation & Analysis</h4>
                  <p className="text-sm text-muted-foreground">
                    ANSYS, CFD, FEA, MATLAB, MADYMO
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2 text-sm">Programming & Data</h4>
                  <p className="text-sm text-muted-foreground">
                    Python, C++, MATLAB, Excel, Arduino
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2 text-sm">Manufacturing</h4>
                  <p className="text-sm text-muted-foreground">
                    CNC, 3D Printing, GD&T, BlueBeam
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2 text-sm">Core Competencies</h4>
                  <p className="text-sm text-muted-foreground">
                    CAD, CFD, FEA, Data Analysis, Advanced Mathematics, Teamwork, Communication
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2 text-sm">Certifications</h4>
                  <p className="text-sm text-muted-foreground">
                    Certified SolidWorks Associate, Bloomberg Market Concepts, MATLAB Onramp
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
                Key Projects & Achievements
              </h3>
              <div className="pl-10">
                <p className="text-sm text-muted-foreground mb-4">
                  See the <a href="/projects" className="text-accent hover:underline">Projects page</a> for 
                  detailed documentation of all engineering projects, including CAD designs, simulations, and analysis work.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2"><span className="text-foreground font-medium">Academic Projects:</span> Autonomous Driving Buggy, Arduino-Based Cyclist Protection System, F1 Front Wing CFD Analysis, MATLAB Kinematic Pumpjack Simulation, Smartphone Chassis Design & FEA</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2"><span className="text-foreground font-medium">Research & Analysis:</span> Acoustic Liners for UAM Applications, Thermal Systems Analysis, Multibody Dynamics, Materials Selection</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground"><span className="text-foreground font-medium">Achievements & Leadership:</span> Castleknock College Deputy School Captain (2022), Valedictory Speech (2022), Bologna Marathon Finisher (2025), Trinity Rugby DUFC First XV, RIAM Grade 6 Pianist</p>
                  </div>
                </div>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="bg-card rounded-lg border border-border overflow-hidden mb-8">
              <div className="bg-secondary/10 p-4 border-b border-border">
                <h3 className="font-semibold text-foreground">View Full CV</h3>
              </div>
              <iframe
                src="/finnoconnor_portfolio/cv/Finn_OConnor_CV.pdf#toolbar=1&view=FitH"
                className="w-full h-screen md:h-[800px]"
                title="Finn O'Connor CV"
              />
            </div>

            {/* Download CTA */}
            <div className="bg-secondary/50 rounded-lg p-6 text-center">
              <p className="text-muted-foreground mb-4">
                Download the complete CV as a PDF for your records.
              </p>
              <a
                href="/finnoconnor_portfolio/cv/Finn_OConnor_CV.pdf"
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
