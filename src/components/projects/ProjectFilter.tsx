import { Search } from "lucide-react";
import { Discipline, disciplines } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectFilterProps {
  selectedDiscipline: Discipline | "All";
  onDisciplineChange: (discipline: Discipline | "All") => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function ProjectFilter({
  selectedDiscipline,
  onDisciplineChange,
  searchQuery,
  onSearchChange,
}: ProjectFilterProps) {
  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
        <input
          type="text"
          placeholder="Search projects by title, tag, or keyword..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow"
        />
      </div>

      {/* Discipline Tabs */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onDisciplineChange("All")}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
            selectedDiscipline === "All"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          )}
        >
          All Projects
        </button>
        {disciplines.map((discipline) => (
          <button
            key={discipline}
            onClick={() => onDisciplineChange(discipline)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors",
              selectedDiscipline === discipline
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
          >
            {discipline}
          </button>
        ))}
      </div>
    </div>
  );
}
