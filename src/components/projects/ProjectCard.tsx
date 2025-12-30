import { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink, Github, FileText, Download } from "lucide-react";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedPdfIndex, setExpandedPdfIndex] = useState<number | null>(null);

  return (
    <article className="card-elevated overflow-hidden">
      {/* Card Header */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-serif text-xl font-semibold text-primary leading-tight">
            {project.title}
          </h3>
          <span className="tag-accent shrink-0 text-xs">
            {project.discipline}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="tag text-xs">
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
          {project.description}
        </p>

        {/* Outcome */}
        <div className="bg-secondary/50 rounded p-3 mb-4">
          <p className="text-sm">
            <span className="font-semibold text-foreground">Outcome: </span>
            <span className="text-muted-foreground">{project.outcome}</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          {project.pdfUrl && (
            <>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2 rounded text-sm font-medium transition-colors",
                  isExpanded
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                <FileText size={16} />
                {isExpanded ? "Hide Report" : "View Report"}
                {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              <a
                href={project.pdfUrl}
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              >
                <Download size={16} />
                Download Report
              </a>
            </>
          )}

          {project.pdfs && project.pdfs.map((pdf, index) => (
            <div key={index} className="flex gap-2">
              <button
                onClick={() => setExpandedPdfIndex(expandedPdfIndex === index ? null : index)}
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2 rounded text-sm font-medium transition-colors",
                  expandedPdfIndex === index
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                <FileText size={16} />
                {expandedPdfIndex === index ? `Hide ${pdf.label}` : `View ${pdf.label}`}
                {expandedPdfIndex === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              <a
                href={pdf.url}
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              >
                <Download size={16} />
                Download {pdf.label}
              </a>
            </div>
          ))}

          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
            >
              <Github size={16} />
              Code
            </a>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
            >
              <ExternalLink size={16} />
              Demo
            </a>
          )}
        </div>
      </div>

      {/* Collapsible PDF Viewer */}
      {isExpanded && project.pdfUrl && (
        <div className="border-t border-border animate-accordion-down">
          <div className="p-4 bg-muted/30">
            <div className="aspect-[8.5/11] w-full max-h-[80vh] bg-background rounded border border-border overflow-hidden">
              <iframe
                src={project.pdfUrl}
                className="w-full h-full"
                title={`${project.title} - PDF Report`}
                style={{ border: 'none' }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Having trouble viewing? <a href={project.pdfUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Open in new tab</a>
            </p>
          </div>
        </div>
      )}

      {/* Multiple PDFs Viewer */}
      {project.pdfs && expandedPdfIndex !== null && project.pdfs[expandedPdfIndex] && (
        <div className="border-t border-border animate-accordion-down">
          <div className="p-4 bg-muted/30">
            <div className="aspect-[8.5/11] w-full max-h-[80vh] bg-background rounded border border-border overflow-hidden">
              <iframe
                src={project.pdfs[expandedPdfIndex].url}
                className="w-full h-full"
                title={`${project.title} - ${project.pdfs[expandedPdfIndex].label}`}
                style={{ border: 'none' }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Having trouble viewing? <a href={project.pdfs[expandedPdfIndex].url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Open in new tab</a>
            </p>
          </div>
        </div>
      )}
    </article>
  );
}
