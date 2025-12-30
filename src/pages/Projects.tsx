import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { projects, Discipline } from "@/data/projects";

export default function Projects() {
  const [selectedDiscipline, setSelectedDiscipline] = useState<Discipline | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Filter by discipline
      if (selectedDiscipline !== "All" && project.discipline !== selectedDiscipline) {
        return false;
      }

      // Filter by search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = project.title.toLowerCase().includes(query);
        const matchesTags = project.tags.some((tag) => tag.toLowerCase().includes(query));
        const matchesDescription = project.description.toLowerCase().includes(query);
        const matchesOutcome = project.outcome.toLowerCase().includes(query);

        if (!matchesTitle && !matchesTags && !matchesDescription && !matchesOutcome) {
          return false;
        }
      }

      return true;
    });
  }, [selectedDiscipline, searchQuery]);

  const projectCounts = useMemo(() => {
    return {
      all: projects.length,
      byDiscipline: {
        "CAD & Design": projects.filter((p) => p.discipline === "CAD & Design").length,
        "Programming & Software": projects.filter((p) => p.discipline === "Programming & Software").length,
        "Engineering Analysis": projects.filter((p) => p.discipline === "Engineering Analysis").length,
      },
    };
  }, []);

  return (
    <Layout>
      {/* Page Header */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-secondary/20 via-background to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-accent/15 to-secondary/10 rounded-full blur-3xl"></div>
        </div>
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Projects
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A collection of {projectCounts.all} projects spanning CAD design, software development, 
              and engineering analysis. Each project includes documentation of the process and outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="page-section">
        <div className="section-container">
          {/* Filters */}
          <div className="mb-10">
            <ProjectFilter
              selectedDiscipline={selectedDiscipline}
              onDisciplineChange={setSelectedDiscipline}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredProjects.length}</span> 
              {filteredProjects.length === 1 ? " project" : " projects"}
              {selectedDiscipline !== "All" && (
                <span> in <span className="font-semibold text-foreground">{selectedDiscipline}</span></span>
              )}
              {searchQuery && (
                <span> matching "<span className="font-semibold text-foreground">{searchQuery}</span>"</span>
              )}
            </p>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid gap-6 md:gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg mb-4">
                No projects found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSelectedDiscipline("All");
                  setSearchQuery("");
                }}
                className="btn-secondary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
