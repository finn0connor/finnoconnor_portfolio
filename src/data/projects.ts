export type Discipline = "CAD & Design" | "Programming & Software" | "Engineering Analysis";

export interface Project {
  id: string;
  title: string;
  discipline: Discipline;
  tags: string[];
  description: string;
  outcome: string;
  pdfUrl?: string;
  codeUrl?: string;
  demoUrl?: string;
}

// Sample projects - Replace with your actual project data
export const projects: Project[] = [
  {
    id: "1",
    title: "FEA and Design of a High-Performance Smartphone Chassis",
    discipline: "CAD & Design",
    tags: ["SolidWorks", "Computer Aided Design (CAD)", "Finite Element Analysis (FEA)", "Thermal Simulation", "Structural Simulation", "Mesh Refinement", "MATLAB", "Excel"],
    description: "Designed a lightweight, premium smarphone chassis with high bending and torsional stiffness, and excellent thermal performance.",
    outcome: "Designed a smartphone chassis that weighed 143.5 g, with a strength ratio of 4.7%, specific stiffness of 8.7 (N/mm)/g, and a max temp of 35.2 °C under peak CPU and battery operation conditions. This project was awarded 89%, which was the highest grade in the class.",
    pdfUrl: "/finnoconnor_portfolio/projects/4B7_Assignment_2_Group_4_Report.pdf",
  },
  {
    id: "2",
    title: "CNC Machining Optimization Tool",
    discipline: "Programming & Software",
    tags: ["Python", "G-Code", "Optimization"],
    description: "Developed a Python application to optimize CNC toolpaths, reducing machining time and tool wear through intelligent path planning.",
    outcome: "Achieved 25% reduction in cycle time across test parts.",
    pdfUrl: "/finnoconnor_portfolio/projects/4B13_Assignment2_FinnOConnor.pdf",
    codeUrl: "https://github.com/username/cnc-optimizer",
  },
  {
    id: "3",
    title: "Thermal Analysis of Heat Exchanger",
    discipline: "Engineering Analysis",
    tags: ["ANSYS", "CFD", "Heat Transfer"],
    description: "Conducted comprehensive thermal and flow analysis of a shell-and-tube heat exchanger using computational fluid dynamics.",
    outcome: "Identified design modifications that improved thermal efficiency by 15%.",
    pdfUrl: "/finnoconnor_portfolio/projects/4B17_Final_Assignment_FinnOConnor.pdf",
  },
  {
    id: "4",
    title: "Robotic Gripper Mechanism",
    discipline: "CAD & Design",
    tags: ["Fusion 360", "3D Printing", "Mechanisms"],
    description: "Designed an adaptive gripper mechanism capable of handling objects of varying geometries using compliant mechanisms.",
    outcome: "Successfully manufactured and tested prototype with 95% grip reliability.",
    pdfUrl: "/finnoconnor_portfolio/projects/4B7_Computer_Aided_Design__B4_Assignment_3.pdf",
  },
  {
    id: "5",
    title: "Production Scheduling System",
    discipline: "Programming & Software",
    tags: ["JavaScript", "React", "Algorithms"],
    description: "Built a web-based production scheduling system using constraint satisfaction algorithms to optimize job shop scheduling.",
    outcome: "Deployed system reduced scheduling conflicts by 60%.",
    pdfUrl: "/finnoconnor_portfolio/projects/4E3_Research_Methods__G17_Assignment_1.pdf",
    demoUrl: "https://demo.example.com",
  },
  {
    id: "6",
    title: "Structural FEA of Bicycle Frame",
    discipline: "Engineering Analysis",
    tags: ["Abaqus", "FEA", "Fatigue Analysis"],
    description: "Performed finite element analysis on a custom bicycle frame design, including static loading and fatigue life prediction.",
    outcome: "Validated design meets safety factor requirements with 20% weight reduction.",
    pdfUrl: "/finnoconnor_portfolio/projects/4E3_Research_Methods__G17_Assignment_2.pdf",
  },
  {
    id: "7",
    title: "Pneumatic System Design",
    discipline: "CAD & Design",
    tags: ["AutoCAD", "P&ID", "Pneumatics"],
    description: "Designed complete pneumatic circuit and component layout for an industrial automation system.",
    outcome: "System commissioned successfully with zero air leaks.",
    pdfUrl: "/finnoconnor_portfolio/projects/4E3-Research-Methods-Assignment3-Group17.pdf",
  },
  {
    id: "8",
    title: "Machine Learning for Quality Control",
    discipline: "Programming & Software",
    tags: ["Python", "TensorFlow", "Computer Vision"],
    description: "Implemented a computer vision system using deep learning to detect manufacturing defects in real-time.",
    outcome: "Achieved 98.5% defect detection accuracy on production line.",
    pdfUrl: "/finnoconnor_portfolio/projects/4E3_Research_Methods__G17_Assignment_4.pdf",
    codeUrl: "https://github.com/username/defect-detection",
  },
  {
    id: "9",
    title: "Vibration Analysis of Rotating Machinery",
    discipline: "Engineering Analysis",
    tags: ["MATLAB", "Signal Processing", "Diagnostics"],
    description: "Developed vibration analysis methodology for predictive maintenance of rotating equipment using spectral analysis.",
    outcome: "Prevented 3 potential equipment failures during pilot program.",
    pdfUrl: "/finnoconnor_portfolio/projects/4E17-Multibody-Dynamics-Leg-Kick-FinnOConnor.pdf",
  },
  {
    id: "10",
    title: "Injection Mold Design",
    discipline: "CAD & Design",
    tags: ["Moldflow", "SolidWorks", "DFM"],
    description: "Designed injection mold tooling for consumer product housing, including cooling channel optimization and gate placement.",
    outcome: "Reduced cycle time by 18% compared to initial design.",
    pdfUrl: "/finnoconnor_portfolio/projects/3B3_MicroProject_FinnOConnor_22336740.pdf",
  },
  {
    id: "11",
    title: "IoT Sensor Data Pipeline",
    discipline: "Programming & Software",
    tags: ["Python", "AWS", "IoT"],
    description: "Built a data pipeline for processing and visualizing real-time sensor data from manufacturing equipment.",
    outcome: "Enabled real-time monitoring of 50+ machines.",
    pdfUrl: "/finnoconnor_portfolio/projects/3B4-Mechanical-Engineering-Materials-finnoconnor.pdf",
  },
  {
    id: "12",
    title: "Crashworthiness Simulation",
    discipline: "Engineering Analysis",
    tags: ["LS-DYNA", "Explicit FEA", "Safety"],
    description: "Conducted crash simulation analysis for automotive component design, evaluating energy absorption and deformation patterns.",
    outcome: "Design iteration improved energy absorption by 22%.",
    pdfUrl: "/finnoconnor_portfolio/projects/3B5 Mechanics of Machines - Assignment 1 Part 2.pdf",
  },
  {
    id: "13",
    title: "Modular Fixture System",
    discipline: "CAD & Design",
    tags: ["SolidWorks", "Fixtures", "Modular Design"],
    description: "Designed a modular fixture system for flexible manufacturing, allowing rapid reconfiguration for different part geometries.",
    outcome: "Reduced setup time by 50% for new product introduction.",
    pdfUrl: "/projects/fixtures.pdf",
  },
  {
    id: "14",
    title: "Inventory Management System",
    discipline: "Programming & Software",
    tags: ["TypeScript", "Node.js", "Database"],
    description: "Developed a full-stack inventory management system with barcode scanning, reorder alerts, and reporting dashboards.",
    outcome: "Eliminated stockouts and reduced excess inventory by 30%.",
    pdfUrl: "/projects/inventory.pdf",
    demoUrl: "https://inventory-demo.example.com",
  },
  {
    id: "15",
    title: "Fluid Flow Optimization in Manifold",
    discipline: "Engineering Analysis",
    tags: ["ANSYS Fluent", "CFD", "Optimization"],
    description: "Optimized internal flow channels in a hydraulic manifold to minimize pressure drop and improve flow distribution.",
    outcome: "Achieved 35% reduction in pressure losses.",
    pdfUrl: "/projects/manifold.pdf",
  },
  {
    id: "16",
    title: "Precision Measurement Fixture",
    discipline: "CAD & Design",
    tags: ["GD&T", "Metrology", "Precision"],
    description: "Designed a measurement fixture for quality inspection of aerospace components with sub-micron repeatability requirements.",
    outcome: "Fixture achieved 0.5μm repeatability in validation testing.",
    pdfUrl: "/projects/measurement.pdf",
  },
];

export const disciplines: Discipline[] = ["CAD & Design", "Programming & Software", "Engineering Analysis"];

export const allTags = [...new Set(projects.flatMap(p => p.tags))].sort();
