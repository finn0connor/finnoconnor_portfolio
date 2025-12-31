import { Layout } from "@/components/layout/Layout";
import { MapPin, GraduationCap, Code, Wrench, Cog } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Photo Placeholder */}
            <div className="md:col-span-1">
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center border border-border">
                <span className="text-muted-foreground text-sm">Your Photo Here</span>
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-2">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                About Me
              </h1>
              <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={16} />
                  Dublin, Ireland
                </span>
                <span className="inline-flex items-center gap-2">
                  <GraduationCap size={16} />
                  Trinity College Dublin
                </span>
              </div>
              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a Masters student in Mechanical & Manufacturing Engineering at Trinity College Dublin, 
                  passionate about building practical systems that solve real-world problems.
                </p>
                <p className="text-muted-foreground leading-relaxed">
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
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-8">
            Education
          </h2>

          <div className="space-y-6">
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                <h3 className="font-serif text-xl font-semibold">
                  Masters in Mechanical & Manufacturing Engineering
                </h3>
                <span className="text-muted-foreground text-sm">Expected 2025</span>
              </div>
              <p className="text-accent font-medium mb-2">Trinity College Dublin</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                [Add details about your coursework, thesis topic, relevant modules, achievements]
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                <h3 className="font-serif text-xl font-semibold">
                  Bachelor's Degree
                </h3>
                <span className="text-muted-foreground text-sm">[Year]</span>
              </div>
              <p className="text-accent font-medium mb-2">[University Name]</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                [Add details about your undergraduate education]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="page-section bg-secondary/30">
        <div className="section-container">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-8">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-semibold">Programming</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Python</li>
                <li>JavaScript / TypeScript</li>
                <li>MATLAB</li>
                <li>SQL</li>
              </ul>
            </div>

            {/* Manufacturing */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-semibold">Manufacturing</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>CNC Machining</li>
                <li>3D Printing / Additive</li>
                <li>Injection Molding</li>
                <li>GD&T</li>
              </ul>
            </div>

            {/* Tools & Platforms */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-semibold">Tools & Platforms</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Git / GitHub</li>
                <li>Linux</li>
                <li>Docker</li>
                <li>AWS</li>
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-semibold">Other Skills</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
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
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-8">
            Interests
          </h2>
          <div className="max-w-3xl">
            <p className="text-muted-foreground leading-relaxed">
              [Add information about your personal interests, hobbies, and what you do outside of engineering. 
              This helps recruiters and visitors get a sense of who you are as a person.]
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
