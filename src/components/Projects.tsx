import { projects } from "@/data/projects";
import { InView } from "@/components/InView";
import { ProjectCard } from "@/components/ProjectCard";

export function Projects() {
  return (
    <section id="work" className="section">
      <div className="wrap">
        <InView>
          <p className="kicker">Selected work</p>
          <h2 className="mt-4 font-display text-display leading-[1.02]">
            Things I've Built.
          </h2>
          <p className="mt-4 max-w-xl text-lg text-ink-soft">
            Projects where software meets intelligence.
          </p>
        </InView>
        <div className="mt-8">
          {projects.map((project) => (
            <InView key={project.slug}>
              <ProjectCard project={project} />
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}
