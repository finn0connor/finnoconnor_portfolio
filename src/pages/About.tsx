import { Layout } from "@/components/layout/Layout";
import { MapPin, GraduationCap, Code, Wrench, Cog } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-secondary/30">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-start">
            {/* Photo Placeholder */}
            <div className="md:col-span-1">
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center border border-border">
                <span className="text-muted-foreground text-xs sm:text-sm text-center px-2">Your Photo Here</span>
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-2">
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4">
                About Me
              </h1>
              <div className="flex flex-wrap gap-3 sm:gap-4 text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={16} />
                  Dublin, Ireland
                </span>
                <span className="inline-flex items-center gap-2">
                  <GraduationCap size={16} />
                  Trinity College Dublin
                </span>
              </div>
              <div className="prose prose-slate max-w-none text-sm sm:text-base">
                <p className="text-muted-foreground leading-relaxed mb-3">
                  I'm a MAI (MEng) Master of Mechanical and Manufacturing Engineering student at Trinity College Dublin, The University of Dublin, 
                  passionate about building practical systems that solve real-world problems.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  My work sits at the intersection of traditional mechanical engineering and modern software tools. 
                  I believe the best engineering solutions come from combining rigorous analysis with practical 
                  implementation, whether that's through CAD design, FEA simulation, or writing code to automate 
                  and optimise processes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  [Add more about your background, interests, and what drives you here]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="page-section">
        <div className="section-container">
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-6 sm:mb-8">
            Education
          </h2>

          <div className="space-y-4 sm:space-y-6">
            <div className="bg-card rounded-lg p-4 sm:p-6 border border-border">
              <div className="flex flex-col gap-2 sm:gap-3 mb-2 sm:mb-3">
                <h3 className="font-serif text-lg sm:text-xl font-semibold">
                  MAI (MEng) Master of Mechanical and Manufacturing Engineering
                </h3>
                <span className="text-muted-foreground text-xs sm:text-sm">2022 – 2027</span>
              </div>
              <p className="text-accent font-medium mb-2 text-sm sm:text-base">Trinity College Dublin, The University of Dublin</p>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                [Add details about your coursework, thesis topic, relevant modules, achievements]
              </p>
            </div>

            <div className="bg-card rounded-lg p-4 sm:p-6 border border-border">
              <div className="flex flex-col gap-2 sm:gap-3 mb-2 sm:mb-3">
                <h3 className="font-serif text-lg sm:text-xl font-semibold">
                  BAI (BEng) Bachelor of Mechanical and Manufacturing Engineering
                </h3>
                <span className="text-muted-foreground text-xs sm:text-sm">[Year]</span>
              </div>
              <p className="text-accent font-medium mb-2 text-sm sm:text-base">Trinity College Dublin, The University of Dublin</p>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                [Add details about your undergraduate education]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="page-section bg-secondary/30">
        <div className="section-container">
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-6 sm:mb-8">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {/* CAD Software */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Cog className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-semibold">CAD Software</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>SolidWorks (Advanced)</li>
                <li>Fusion 360</li>
                <li>AutoCAD</li>
                <li>CATIA</li>
              </ul>
            </div>

            {/* Analysis Tools */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-semibold">Analysis & Simulation</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>ANSYS (Mechanical, Fluent)</li>
                <li>Abaqus</li>
                <li>LS-DYNA</li>
                <li>MATLAB / Simulink</li>
              </ul>
            </div>

            {/* Programming */}
            <div className="bg-card rounded-lg p-4 sm:p-6 border border-border">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-9 sm:w-10 h-9 sm:h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Code className="w-4 sm:w-5 h-4 sm:h-5 text-accent" />
                </div>
                <h3 className="font-serif text-base sm:text-lg font-semibold">Programming</h3>
              </div>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li>Python</li>
                <li>JavaScript / TypeScript</li>
                <li>MATLAB</li>
                <li>SQL</li>
              </ul>
            </div>

            {/* Manufacturing */}
            <div className="bg-card rounded-lg p-4 sm:p-6 border border-border">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-9 sm:w-10 h-9 sm:h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Wrench className="w-4 sm:w-5 h-4 sm:h-5 text-accent" />
                </div>
                <h3 className="font-serif text-base sm:text-lg font-semibold">Manufacturing</h3>
              </div>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li>CNC Machining</li>
                <li>3D Printing / Additive</li>
                <li>Injection Molding</li>
                <li>GD&T</li>
              </ul>
            </div>

            {/* Tools & Platforms */}
            <div className="bg-card rounded-lg p-4 sm:p-6 border border-border">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-9 sm:w-10 h-9 sm:h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Code className="w-4 sm:w-5 h-4 sm:h-5 text-accent" />
                </div>
                <h3 className="font-serif text-base sm:text-lg font-semibold">Tools & Platforms</h3>
              </div>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li>Git / GitHub</li>
                <li>Linux</li>
                <li>Docker</li>
                <li>AWS</li>
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="bg-card rounded-lg p-4 sm:p-6 border border-border">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-9 sm:w-10 h-9 sm:h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-4 sm:w-5 h-4 sm:h-5 text-accent" />
                </div>
                <h3 className="font-serif text-base sm:text-lg font-semibold">Other Skills</h3>
              </div>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li>Technical Writing</li>
                <li>Project Management</li>
                <li>Data Analysis</li>
                <li>Problem Solving</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="page-section">
        <div className="section-container">
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-6 sm:mb-8">
            Interests
          </h2>
          <div className="max-w-3xl">
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              [Add information about your personal interests, hobbies, and what you do outside of engineering. 
              This helps recruiters and visitors get a sense of who you are as a person.]
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
