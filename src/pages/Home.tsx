import { Link } from "react-router-dom";
import { ArrowRight, Download, Mail, Zap, Factory, Leaf, Cog } from "lucide-react";
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

      {/* Career Interests */}
      <section className="page-section">
        <div className="section-container">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
            Currently Seeking Opportunities
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            I'm interested in opportunities where I can apply my engineering expertise and analytical skills in the following areas:
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Energy and Commodity Trading */}
            <div className="bg-card rounded-lg p-6 border border-border hover:border-accent/50 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Energy and Commodity Trading</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Leveraging my background in energy markets, data analysis, and quantitative methods to optimise trading strategies, 
                analyse market dynamics, and develop models for energy and commodity markets.
              </p>
            </div>

            {/* Energy Engineering */}
            <div className="bg-card rounded-lg p-6 border border-border hover:border-accent/50 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Factory className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Energy Engineering</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Applying engineering principles to energy systems, including power generation, energy efficiency optimisation, 
                thermal systems design, and the development of sustainable energy infrastructure.
              </p>
            </div>

            {/* Green Technology */}
            <div className="bg-card rounded-lg p-6 border border-border hover:border-accent/50 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Green Technology</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Contributing to sustainable innovation through renewable energy systems, carbon reduction technologies, 
                and environmentally-conscious engineering solutions that address climate challenges.
              </p>
            </div>

            {/* Mechanical Design Engineering */}
            <div className="bg-card rounded-lg p-6 border border-border hover:border-accent/50 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Cog className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Mechanical Design Engineering</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Designing and optimizing mechanical systems using CAD, FEA, and CFD tools, with focus on DFM principles, 
                performance analysis, and creating innovative solutions for complex engineering challenges.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/contact" 
              className="btn-primary inline-flex items-center gap-2"
            >
              <Mail size={18} />
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
            {/* Mechanical Design and Simulation */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Mechanical Design and Simulation</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                SolidWorks, ANSYS, FEA, CFD
              </p>
            </div>

            {/* Programming and Data Analysis */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Programming and Data Analysis</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                MATLAB, Python, C++, Arduino, Excel
              </p>
            </div>

            {/* Engineering Fundamentals */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Engineering Fundamentals</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Applied Mathematics, Probability & Statistics, Numerical Methods, Thermodynamics, Heat Transfer, Fluid Mechanics, Classical Mechanics, Multibody Dynamics
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
