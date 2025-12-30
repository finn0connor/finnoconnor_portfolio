export type Discipline = "CAD & Design" | "Programming & Software" | "Engineering Analysis";

export interface Project {
  id: string;
  title: string;
  discipline: Discipline;
  tags: string[];
  description: string;
  outcome: string;
  pdfUrl?: string;
  pdfs?: { label: string; url: string; description?: string }[];
  codeUrl?: string;
  demoUrl?: string;
}

// Sample projects - Replace with your actual project data
export const projects: Project[] = [
  {
    id: "1",
    title: "Research Methods: Investigation into Acoustic Liners for UAM Applications",
    discipline: "Engineering Analysis",
    tags: ["Research", "Acoustics", "UAM", "Additive Manufacturing", "Noise Reduction"],
    description: "Comprehensive research investigation into acoustic liner technologies for Urban Air Mobility (UAM) applications, focusing on noise reduction solutions for next-generation aircraft.",
    outcome: "Completed four major research milestones demonstrating advanced understanding of acoustic engineering principles and research methodology in emerging aviation technologies.",
    pdfs: [
      { 
        label: "Literature Review of Acoustic Liner Technologies", 
        url: "/finnoconnor_portfolio/projects/4E3_Research_Methods__G17_Assignment_1.pdf",
        description: "This literature review examines the current state of acoustic liner technologies, analyzing various design approaches and materials used in noise reduction applications. The review synthesizes findings from recent academic research and industry applications to establish a foundation for innovative acoustic solutions."
      },
      { 
        label: "Research Design Proposal", 
        url: "/finnoconnor_portfolio/projects/4E3_Research_Methods__G17_Assignment_2.pdf",
        description: "A comprehensive research design proposal outlining the methodology, experimental approach, and analytical framework for investigating hybrid acoustic liner performance. The proposal details the research questions, hypotheses, data collection methods, and analytical techniques to be employed in the investigation."
      },
      { 
        label: "Research Proposal Presentation", 
        url: "/finnoconnor_portfolio/projects/4E3-Research-Methods-Assignment3-Group17.pdf",
        description: "Visual presentation of the research proposal, communicating the project's objectives, methodology, and expected outcomes to stakeholders. The presentation demonstrates the feasibility and significance of the proposed research into acoustic liner technologies for UAM applications."
      },
      { 
        label: "Conference Paper: Transmission-Loss Performance of Additively Manufactured Hybrid Acoustic Liners for UAM Applications", 
        url: "/finnoconnor_portfolio/projects/4E3_Research_Methods__G17_Assignment_4.pdf",
        description: "A formal conference paper presenting the findings from experimental testing of additively manufactured hybrid acoustic liners. The paper analyzes transmission-loss performance metrics and discusses the implications for noise reduction in Urban Air Mobility vehicles, contributing to the advancement of sustainable aviation technologies."
      }
    ],
  },
  {
    id: "2",
    title: "FEA and Design of a High-Performance Smartphone Chassis",
    discipline: "CAD & Design",
    tags: ["SolidWorks", "Computer Aided Design (CAD)", "Finite Element Analysis (FEA)", "Thermal Simulation", "Structural Simulation", "Mesh Refinement", "MATLAB", "Excel"],
    description: "Designed a lightweight, premium smarphone chassis with high bending and torsional stiffness, and excellent thermal performance.",
    outcome: "Designed a smartphone chassis that weighed 143.5 g, with a strength ratio of 4.7%, specific stiffness of 8.7 (N/mm)/g, and a max temp of 35.2 °C under peak CPU and battery operation conditions. This project was awarded 89%, which was the highest grade in the class.",
    pdfUrl: "/finnoconnor_portfolio/projects/4B7_Assignment_2_Group_4_Report.pdf",
  },
  {
    id: "3",
    title: "High-Precision Aerospace Component Design",
    discipline: "CAD & Design",
    tags: ["SolidWorks", "CAD", "Engineering Drawing", "GD&T", "Design for Manufacturing"],
    description: "Designed a complex aerospace component assembly with detailed engineering drawings, incorporating geometric dimensioning and tolerancing (GD&T) principles and design for manufacturing considerations.",
    outcome: "Completed comprehensive CAD model and technical documentation demonstrating advanced proficiency in professional engineering design practices and industry-standard dimensioning techniques.",
    pdfUrl: "/finnoconnor_portfolio/projects/4B7_Computer_Aided_Design__B4_Assignment_3.pdf",
  },
  {
    id: "4",
    title: "Manufacturing Process Simulation and Optimization",
    discipline: "Engineering Analysis",
    tags: ["Manufacturing", "Process Simulation", "Optimization", "MATLAB", "Statistical Analysis"],
    description: "Analyzed and optimized manufacturing processes using simulation techniques and statistical methods, focusing on improving production efficiency and quality control metrics.",
    outcome: "Developed optimization strategies that demonstrated significant improvements in process throughput and quality consistency through data-driven decision making.",
    pdfUrl: "/finnoconnor_portfolio/projects/4B13_Assignment2_FinnOConnor.pdf",
  },
  {
    id: "5",
    title: "Advanced Thermal Systems Analysis",
    discipline: "Engineering Analysis",
    tags: ["Thermal Analysis", "Heat Transfer", "ANSYS", "CFD", "Energy Systems"],
    description: "Conducted comprehensive thermal analysis of complex engineering systems, applying computational fluid dynamics and heat transfer principles to evaluate thermal performance and efficiency.",
    outcome: "Completed detailed thermal characterization demonstrating advanced understanding of heat transfer mechanisms, computational analysis techniques, and thermal system optimization strategies.",
    pdfUrl: "/finnoconnor_portfolio/projects/4B17_Final_Assignment_FinnOConnor.pdf",
  },
  {
    id: "6",
    title: "Multibody Dynamics: Biomechanical Leg Kick Analysis",
    discipline: "Engineering Analysis",
    tags: ["Multibody Dynamics", "Kinematics", "MATLAB", "Biomechanics", "Motion Analysis"],
    description: "Performed comprehensive multibody dynamics analysis of a biomechanical leg kick motion, modeling joint kinematics, forces, and energy transfer throughout the motion sequence.",
    outcome: "Successfully analyzed complex multi-joint motion using advanced dynamics principles, demonstrating proficiency in kinematic modeling, force analysis, and computational mechanics simulation.",
    pdfUrl: "/finnoconnor_portfolio/projects/4E17-Multibody-Dynamics-Leg-Kick-FinnOConnor.pdf",
  },
  {
    id: "7",
    title: "Materials Selection and Property Analysis",
    discipline: "Engineering Analysis",
    tags: ["Materials Science", "Material Properties", "Selection Methodology", "Ashby Charts", "Failure Analysis"],
    description: "Comprehensive study of engineering materials, analyzing mechanical properties, failure modes, and selection methodologies for various engineering applications using Ashby chart analysis.",
    outcome: "Developed systematic material selection framework demonstrating understanding of property-performance relationships and material behavior under different loading conditions.",
    pdfUrl: "/finnoconnor_portfolio/projects/3B4-Mechanical-Engineering-Materials-finnoconnor.pdf",
  },
  {
    id: "8",
    title: "Mechanical Systems Design and Optimization",
    discipline: "CAD & Design",
    tags: ["Mechanical Design", "System Integration", "Prototyping", "Testing", "Project Management"],
    description: "End-to-end mechanical system design project involving conceptualization, detailed design, prototyping, and testing of an integrated mechanical solution addressing specific engineering requirements.",
    outcome: "Successfully delivered functional mechanical system prototype with comprehensive design documentation, demonstrating ability to manage complete product development cycle from concept through validation.",
    pdfUrl: "/finnoconnor_portfolio/projects/3B3_MicroProject_FinnOConnor_22336740.pdf",
  },
  {
    id: "9",
    title: "Dynamics of Machines: Vibration and Motion Analysis",
    discipline: "Engineering Analysis",
    tags: ["Dynamics", "Vibration Analysis", "Kinematics", "Mechanisms", "MATLAB"],
    description: "Analyzed dynamic behavior of mechanical systems including vibration characteristics, kinematic motion, and force transmission in rotating and reciprocating machinery.",
    outcome: "Completed comprehensive dynamic analysis demonstrating advanced understanding of vibration theory, mechanism kinematics, and computational analysis of mechanical system behavior.",
    pdfUrl: "/finnoconnor_portfolio/projects/3B5 Mechanics of Machines - Assignment 1 Part 2.pdf",
  },
];

export const disciplines: Discipline[] = ["CAD & Design", "Programming & Software", "Engineering Analysis"];

export const allTags = [...new Set(projects.flatMap(p => p.tags))].sort();
