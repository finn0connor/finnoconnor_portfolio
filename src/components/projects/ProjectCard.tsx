import { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink, Github, FileText, Download, Play } from "lucide-react";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedPdfIndex, setExpandedPdfIndex] = useState<number | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  // Extract YouTube video ID from URL
  const getYoutubeEmbedUrl = (url: string) => {
    const videoIdMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    const videoId = videoIdMatch?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  return (
    <article className="card-elevated overflow-hidden">
      {/* Card Header */}
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
          <h3 className="font-serif text-lg sm:text-xl font-semibold text-primary leading-tight">
            {project.title}
          </h3>
          <span className="tag-accent shrink-0 text-xs w-fit">
            {project.discipline}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="tag text-xs">
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
          {project.description}
        </p>

        {/* Outcome */}
        <div className="bg-secondary/50 rounded p-3 mb-3 sm:mb-4">
          <p className="text-xs sm:text-sm">
            <span className="font-semibold text-foreground">Outcome: </span>
            <span className="text-muted-foreground">{project.outcome}</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {project.videoUrl && (
            <button
              onClick={() => setShowVideo(!showVideo)}
              className={cn(
                "inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded text-xs sm:text-sm font-medium transition-colors",
                showVideo
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              <Play size={14} className="sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">{showVideo ? "Hide Video" : "View Video"}</span>
              <span className="sm:hidden">{showVideo ? "Hide" : "Video"}</span>
              {showVideo ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          )}

          {project.pdfUrl && (
            <>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={cn(
                  "inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded text-xs sm:text-sm font-medium transition-colors",
                  isExpanded
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                <FileText size={14} className="sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">{isExpanded ? "Hide Report" : "View Report"}</span>
                <span className="sm:hidden">{isExpanded ? "Hide" : "Report"}</span>
                {isExpanded ? <ChevronUp size={14} className="sm:w-4 sm:h-4" /> : <ChevronDown size={14} className="sm:w-4 sm:h-4" />}
              </button>
              <a
                href={project.pdfUrl}
                download
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded text-xs sm:text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              >
                <Download size={14} className="sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Download Report</span>
                <span className="sm:hidden">Download</span>
              </a>
            </>
          )}

          {project.pdfs && project.pdfs.map((pdf, index) => (
            <div key={index} className="w-full mt-3 sm:mt-4">
              <div className="border-t border-border pt-3 sm:pt-4">
                <h4 className="font-semibold text-sm sm:text-base text-foreground mb-2">{pdf.label}</h4>
                {pdf.description && (
                  <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3 leading-relaxed">{pdf.description}</p>
                )}
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setExpandedPdfIndex(expandedPdfIndex === index ? null : index)}
                    className={cn(
                      "inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded text-xs sm:text-sm font-medium transition-colors",
                      expandedPdfIndex === index
                        ? "bg-accent text-accent-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    )}
                  >
                    <FileText size={14} className="sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">{expandedPdfIndex === index ? "Hide Document" : "View Document"}</span>
                    <span className="sm:hidden">{expandedPdfIndex === index ? "Hide" : "View"}</span>
                    {expandedPdfIndex === index ? <ChevronUp size={14} className="sm:w-4 sm:h-4" /> : <ChevronDown size={14} className="sm:w-4 sm:h-4" />}
                  </button>
                  <a
                    href={pdf.url}
                    download
                    className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded text-xs sm:text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                  >
                    <Download size={14} className="sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">Download</span>
                    <span className="sm:hidden">DL</span>
                  </a>
                </div>
                
                {/* PDF Viewer for this specific document */}
                {expandedPdfIndex === index && (
                  <div className="mt-3 sm:mt-4 border-t border-border pt-3 sm:pt-4 animate-accordion-down">
                    <div className="w-full h-[500px] sm:h-[600px] md:h-[800px] bg-background rounded border border-border overflow-auto">
                      <iframe
                        src={pdf.url}
                        className="w-full h-full"
                        title={`${project.title} - ${pdf.label}`}
                        style={{ border: 'none' }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 text-center">
                      Having trouble viewing? <a href={pdf.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Open in new tab</a>
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}

          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded text-xs sm:text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
            >
              <Github size={14} className="sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Code</span>
              <span className="sm:hidden">Git</span>
            </a>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded text-xs sm:text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
            >
              <ExternalLink size={14} className="sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Demo</span>
              <span className="sm:hidden">Link</span>
            </a>
          )}
        </div>
      </div>

      {/* Collapsible Video Viewer */}
      {showVideo && project.videoUrl && getYoutubeEmbedUrl(project.videoUrl) && (
        <div className="border-t border-border animate-accordion-down">
          <div className="p-3 sm:p-4 bg-muted/30">
            <div className="aspect-video w-full bg-background rounded border border-border overflow-hidden">
              <iframe
                src={getYoutubeEmbedUrl(project.videoUrl) || ""}
                className="w-full h-full"
                title={`${project.title} - Video`}
                style={{ border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Collapsible PDF Viewer */}
      {isExpanded && project.pdfUrl && (
        <div className="border-t border-border animate-accordion-down">
          <div className="p-3 sm:p-4 bg-muted/30">
            <div className="w-full h-[500px] sm:h-[600px] md:h-[800px] bg-background rounded border border-border overflow-auto">
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
    </article>
  );
}
