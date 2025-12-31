import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { projects, Discipline, Project } from "@/data/projects";

export default function Projects() {
  const [selectedDiscipline, setSelectedDiscipline] = useState<Discipline | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");

  const getProjectDisciplines = (project: Project) => project.disciplines ?? (project.discipline ? [project.discipline] : []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const projectDisciplines = getProjectDisciplines(project);

      // Filter by discipline (supports multi-discipline projects)
      if (selectedDiscipline !== "All" && !projectDisciplines.includes(selectedDiscipline)) {
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
        "CAD & Design": projects.filter((p) => getProjectDisciplines(p).includes("CAD & Design")).length,
        "Programming & Software": projects.filter((p) => getProjectDisciplines(p).includes("Programming & Software")).length,
        "Engineering Analysis": projects.filter((p) => getProjectDisciplines(p).includes("Engineering Analysis")).length,
      },
    };
  }, []);

  return (
    <Layout>
      {/* Page Header */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
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
