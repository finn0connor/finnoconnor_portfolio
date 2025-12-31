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
    tags: ["Research", "Acoustics Engineering", "Mathematical Modelling", "MATLAB", "SolidWorks", "Additive Manufacturing", "LaTeX"],
    description: "Comprehensive research investigation into acoustic liner technologies for Urban Air Mobility (UAM) applications, focusing on noise reduction solutions for next-generation aircraft such as drones.",
    outcome: "Conducted a literature review into acoustic liner technologies, proposed and presented an acoustic liner for testing, and presented findings comparing two designs in a conference paper format.",
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
        description: "A formal conference paper presenting the findings from experimental testing of additively manufactured hybrid acoustic liners. The paper analyses transmission-loss performance metrics and discusses the implications for noise reduction in UAM vehicles, contributing to the advancement of sustainable aviation technologies."
      }
    ],
  },
  {
    id: "2",
    title: "Optimisation of a High-Performance Smartphone Chassis Using CAD and FEA",
    discipline: "CAD & Design",
    tags: ["SolidWorks", "Computer Aided Design (CAD)", "Finite Element Analysis (FEA)", "Thermal Simulation", "Structural Simulation", "Mesh Refinement", "MATLAB", "Excel"],
    description: "Designed a lightweight, premium smartphone chassis using SolidWorks that had high bending and torsional stiffness, and excellent thermal performance.",
    outcome: "The final design weighed 143.5 g, had a strength ratio of 4.7%, a specific stiffness of 8.7 (N/mm)/g, and a max temp of 35.2°C under peak CPU and battery loading conditions. This project was awarded 89%, which was the highest grade in the class.",
    pdfUrl: "/finnoconnor_portfolio/projects/4B7_Assignment_2_Group_4_Report.pdf",
  },
  {
    id: "3",
    title: "Optimisation of a Drone Frame Using CAD and FEA",
    discipline: "CAD & Design",
    tags: ["SolidWorks", "Computer Aided Design (CAD)", "Finite Element Analysis (FEA)", "Structural Simulation", "Thermal Simulation", "Toplogy Optimisation", "Mesh Refinement"],
    description: "Designed and optimised a drone frame for wildfire detection using SolidWorks, focusing on achieving high strength-to-weight ratio and thermal performance through iterative design and finite element analysis.",
    outcome: "The final drone frame design achieved a mass of 1202.5 g, which was a 34.6% reduction on the baseline value of 1838 g, a strength ratio of 2.2%, and had a maximum surface temp of 36.7°C and 86.7°C at ambient temperatures of 300 and 350 Kelvin respectively. The project demonstrated effective application of CAD and FEA techniques in lightweight structural design.",
    pdfUrl: "/finnoconnor_portfolio/projects/4B7_Computer_Aided_Design__B4_Assignment_3.pdf",
  },
  {
    id: "4",
    title: "CFD Analysis of a NACA3412 Aerofoil",
    discipline: "Engineering Analysis",
    tags: ["Computational Fluid Dynamics (CFD)", "ANSYS Fluent", "Aerodynamics", "Aerofoil Theory", "Data Analysis", "MATLAB", "Excel"],
    description: "Conducted a CFD analysis of a NACA3412 aerofoil with and without a flap using ANSYS Fluent to observe the effects on lift, drag, and overall aerodynamic performance across various angles of attack.",
    outcome: "Compared lift coefficient values vs angle of attack for unflapped, flapped, thin aerofoil, Joukowski, and experimental aerofoil data. The analysis demonstrated the impact of flap deployment on lift and drag for an aerofoil, providing insights into aerodynamic performance enhancements.",
    pdfUrl: "/finnoconnor_portfolio/projects/4B13_Assignment2_FinnOConnor.pdf",
  },
  {
    id: "5",
    title: "Multibody Dynamics: Kinematic Study of an Engine Valetrain System",
    discipline: "Engineering Analysis",
    tags: ["Multibody Dynamics", "CAD Part and Assembly Modelling", "SolidWorks Motion Analysis", "Contact Modelling", "Kinematics", "MATLAB"],
    description: "Performed a kinematic study of an engine valetrain system using SolidWorks Motion Analysis to model component interactions, contact forces, and motion characteristics throughout the engine cycle. The primary goal was to investigate whether or not upgrading valve springs had a significant performance on engine performance.",
    outcome: "The study concluded that upgrading the valve springs had a negligible effect on the overall kinematic performance of the valetrain system. The analysis provided detailed insights into component motion and interactions, demonstrating proficiency in multibody dynamics and motion analysis techniques.",
    pdfUrl: "/finnoconnor_portfolio/projects/4B17_Final_Assignment_FinnOConnor.pdf",
  },
  {
    id: "6",
    title: "Multibody Dynamics: Biomechanical Leg Kick Analysis",
    discipline: "Engineering Analysis",
    tags: ["Multibody Dynamics", "Kinematics", "MADYMO", "Biomechanics", "Motion Analysis"],
    description: "Performed comprehensive multibody dynamics analysis of a biomechanical leg kick motion, modeling joint kinematics, forces, and energy transfer throughout the motion sequence.",
    outcome: "Successfully analyzed complex multi-joint motion using advanced dynamics principles, demonstrating proficiency in kinematic modeling, force analysis, and computational mechanics simulation.",
    pdfUrl: "/finnoconnor_portfolio/projects/4E17-Multibody-Dynamics-Leg-Kick-FinnOConnor.pdf",
  },
  {
    id: "7",
    title: "Mechanics of Carbon Fibre Reinforced Polymers and Their Use in F1 Flexi Wings",
    discipline: "Engineering Analysis",
    tags: ["Materials Science", "Mechanics of Materials", "Computational Fluid Dynamics (CFD)", "Manufacturing Processes", "Failure Analysis"],
    description: "Investigated the mechanics and material properties of carbon fibre reinforced polymers (CFRP) and their application in Formula 1 flexi wing designs, focusing on structural performance, manufacturing techniques, and failure modes.",
    outcome: "Provided a comprehensive analysis of CFRP mechanics, manufacturing processes, and failure analysis in the context of F1 flexi wings. Simulated aerodynamic loads using CFD to assess structural integrity and performance under racing conditions.",
    pdfUrl: "/finnoconnor_portfolio/projects/3B4-Mechanical-Engineering-Materials-finnoconnor.pdf",
  },
  {
    id: "8",
    title: "Mechanics of 'Ripple-Wall Slick' Tyres in Drag Racing",
    discipline: "Engineering Analysis",
    tags: ["Mechanics of Materials", "Material Deformation", "Stress Analysis", "Mechanical Modelling", "MATLAB"],
    description: "Investigated the mechanical properties of 'Ripple-Wall Slick' tyres used in drag racing, focusing on material deformation, stress distribution, and performance characteristics under high load conditions.",
    outcome: "Made informed assumptions about the properties of drag racing types to model the total radial expansion under peak load conditions. Developed a mechanical model using MATLAB to analyze stress distribution and deformation characteristics, providing insights into tyre performance and durability.",
    pdfUrl: "/finnoconnor_portfolio/projects/3B3_MicroProject_FinnOConnor_22336740.pdf",
  },
  {
    id: "9",
    title: "Mechanics of Machines: Kinematic Analysis of a Four-Bar Pumpjack Mechanism",
    discipline: "Engineering Analysis",
    tags: ["Classical Mechanics", "Kinematics", "Computational Modelling", "MATLAB"],
    description: "Analysed the kinematics of a four-bar pumpjack mechanism used in oil extraction, focusing on motion characteristics, velocity, and acceleration of components throughout the operational cycle.",
    outcome: "Built a computational model in MATLAB to simulate the kinematic behaviour of the pumpjack mechanism. The analysis provided detailed insights into component motion, velocity, and acceleration profiles, demonstrating proficiency in classical mechanics and computational modelling techniques.",
    pdfUrl: "/finnoconnor_portfolio/projects/3B5 Mechanics of Machines - Assignment 1 Part 2.pdf",
  },
  {
    id: "10",
    title: "Heat Exchanger Laboratory Experiment and Analysis",
    discipline: "Engineering Analysis",
    tags: ["Heat Transfer", "Experimental Analysis", "Thermal Dynamics", "Data Analysis", "MATLAB", "Laboratory Techniques"],
    description: "Conducted a comprehensive laboratory experiment investigating heat exchanger performance, examining heat transfer efficiency, temperature profiles, and energy balance across various operating conditions.",
    outcome: "Analysed experimental data to characterise heat exchanger effectiveness and thermal performance. Developed computational models to validate experimental findings and demonstrated proficiency in practical thermal engineering, data analysis, and experimental methodology.",
    pdfUrl: "/finnoconnor_portfolio/projects/4B4_Heat_Exchanger_Lab_Report_Mech-14.pdf",
  },
  {
    id: "11",
    title: "Thermodynamics: Refrigeration Laboratory Experiment",
    discipline: "Engineering Analysis",
    tags: ["Thermodynamics", "Refrigeration Systems", "Experimental Analysis", "Heat Transfer", "Laboratory Techniques", "Data Analysis"],
    description: "Performed a laboratory investigation into refrigeration system performance, focusing on thermodynamic cycles, cooling capacity, energy efficiency, and component interactions within a refrigeration apparatus.",
    outcome: "Collected and analysed experimental data to evaluate refrigeration system efficiency and thermodynamic behaviour. The investigation demonstrated practical understanding of refrigeration principles, experimental design, instrumentation techniques, and the application of thermodynamic theory to real engineering systems.",
    pdfUrl: "/finnoconnor_portfolio/projects/3B1_Thermodynamics_Refrigeration_Lab_FOC_22336740.pdf",
  },
];

export const disciplines: Discipline[] = ["CAD & Design", "Programming & Software", "Engineering Analysis"];

export const allTags = [...new Set(projects.flatMap(p => p.tags))].sort();
