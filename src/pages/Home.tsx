import { Link } from "react-router-dom";
import { ArrowRight, Download, Mail, Briefcase } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="page-section bg-gradient-to-b from-secondary/30 to-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Finn O'Connor: Portfolio
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
              Welcome to my portfolio
            </p>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              This website serves as a comprehensive portfolio and extension to my CV, showcasing my engineering projects, technical skills, and professional experience. 
              I am a Masters student in Mechanical & Manufacturing Engineering at Trinity College Dublin with interests in engineering, energy markets, and technology. 
              Browse my projects to see examples of my work in CAD design, programming, simulation, and data analysis.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/projects" className="btn-primary inline-flex items-center gap-2">
                View Projects
                <ArrowRight size={18} />
              </Link>
              <Link to="/cv" className="btn-secondary inline-flex items-center gap-2">
                <Download size={18} />
                Download CV
              </Link>
              <Link to="/contact" className="btn-secondary inline-flex items-center gap-2">
                <Mail size={18} />
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What I'm Looking For */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <Briefcase size={32} className="shrink-0" />
            <div>
              <h2 className="font-serif text-xl md:text-2xl font-semibold mb-2 text-primary-foreground">
                Currently Seeking Opportunities
              </h2>
              <p className="text-primary-foreground/80">
                I'm interested in opportunities within the energy and commodities industries, where I can apply my engineering expertise, 
                analytical skills, and passion for energy markets to solve real-world challenges.
              </p>
            </div>
            <Link 
              to="/contact" 
              className="shrink-0 bg-primary-foreground text-primary px-6 py-3 rounded font-medium hover:bg-primary-foreground/90 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="page-section bg-secondary/30">
        <div className="section-container">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Core Competencies
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* CAD & Design */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">CAD & Design</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                SolidWorks, Fusion 360, AutoCAD. Experienced in DFM, GD&T, and creating production-ready designs.
              </p>
            </div>

            {/* Programming */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Programming & Software</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Python, JavaScript, MATLAB. Building tools for automation, optimization, and data analysis.
              </p>
            </div>

            {/* Engineering Analysis */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Engineering Analysis</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                ANSYS, Abaqus, LS-DYNA. FEA, CFD, and simulation-driven design optimization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
