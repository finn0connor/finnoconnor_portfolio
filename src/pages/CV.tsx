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
              href="/finnoconnor_portfolio/cv/finnoconnor_resume.pdf"
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
            <div className="bg-card rounded-lg p-4 sm:p-6 md:p-8 border border-border mb-8">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-6 mb-4">
                <div className="flex-1">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">Finn O'Connor</h2>
                  <p className="text-base sm:text-lg text-accent mb-4 sm:mb-6">M.Eng, MAI (Hons) Master of Mechanical Engineering</p>
                </div>
                <img 
                  src="/finnoconnor_portfolio/Trinity-Main-Logo.jpg" 
                  alt="Trinity College Dublin Logo" 
                  className="h-16 sm:h-20 md:h-24 shrink-0 w-auto"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
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
                Master of Mechanical Engineering student with a keen interest in the energy industry. Strong technical foundations in CAD, simulation, programming, and data analysis. 
                Seeking opportunities to apply engineering expertise and analytical skills in energy trading, engineering design, and data-driven problem-solving.
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
                    <li>Relevant Coursework: Engineering Mathematics 1–5, Probability & Statistics, Computational Science, Thermodynamics, Heat Transfer, Fluid Mechanics 1 & 2, Mechanics of Solids, Mechanical Materials, Multibody Dynamics, Mechanics of Machines, Signals and Systems, Computer Engineering, Electronics, Computer Aided Design, Universal Design Innovation, Research Methods, Management for Engineers</li>
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
                    <h4 className="font-semibold text-foreground">Energy Trading Intern</h4>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar size={14} />
                      Jan 2026 – Present
                    </span>
                  </div>
                  <p className="text-accent text-sm mb-2">ElectroRoute — Dublin, Ireland</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Currently on industrial placement with ElectroRoute, an independent energy trading company</li>
                    <li>Developing skills in Python and data analysis while learning about energy markets and trading</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h4 className="font-semibold text-foreground">Intern</h4>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar size={14} />
                      Oct 2025 – Present
                    </span>
                  </div>
                  <p className="text-accent text-sm mb-2">HappyStack — Dublin, Ireland</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>HappyStack is a startup helping e-commerce brands grow through software, data analytics, and marketing</li>
                    <li>Gaining exposure to the e-commerce industry while developing skills in tech stacks and data analysis</li>
                  </ul>
                </div>

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
                      Oct 2024 – Sep 2025
                    </span>
                  </div>
                  <p className="text-accent text-sm mb-2">Formula Trinity — Dublin, Ireland</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Designed and simulated drivetrain components using SolidWorks and ANSYS for Trinity's Formula Student team</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h4 className="font-semibold text-foreground">Quantitative Trader, Macroeconomic Analyst, Basic Materials Analyst</h4>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar size={14} />
                      Feb 2023 – Apr 2025
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
              <div className="pl-10 grid sm:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium text-foreground mb-2 text-sm">Mechanical Design and Simulation</h4>
                  <p className="text-sm text-muted-foreground">
                    SolidWorks, ANSYS, FEA, CFD
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2 text-sm">Programming and Data Analysis</h4>
                  <p className="text-sm text-muted-foreground">
                    MATLAB, Python, C++, Arduino, Excel
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2 text-sm">Engineering Fundamentals</h4>
                  <p className="text-sm text-muted-foreground">
                    Applied Mathematics, Probability & Statistics, Numerical Methods, Thermodynamics, Heat Transfer, Fluid Mechanics, Classical Mechanics
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2 text-sm">Certifications</h4>
                  <p className="text-sm text-muted-foreground">
                    Python & Machine Learning for Financial Analysis, MATLAB Onramp, Bloomberg Market Concepts, Certified SolidWorks Associate, European Computer Driving Licence
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
                    <p className="text-sm text-muted-foreground mb-2"><span className="text-foreground font-medium">Achievements & Leadership:</span> Castleknock College Deputy School Captain (2022), Valedictory Speech (2022), Bologna Marathon Finisher (2025), Trinity Rugby DUFC First XV, RIAM Grade 6 Pianist</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground"><span className="text-foreground font-medium">Part-time Work:</span> Mathematics tutor, bartender in USA and France, stadium steward, construction labourer</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground"><span className="text-foreground font-medium">Interests:</span> Running, rugby, golf, piano, saxophone, acrylic painting, Formula 1, geopolitics, energy economics</p>
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
                src="/finnoconnor_portfolio/cv/finnoconnor_resume.pdf?v=2#toolbar=1&view=FitH"
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
                href="/finnoconnor_portfolio/cv/finnoconnor_resume.pdf?v=2"
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
