import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { SmartImage } from "@/components/SmartImage";
import { useTilt } from "@/lib/hooks";
import { cn } from "@/lib/cn";

function Visual({ project }: { project: Project }) {
  const tilt = useTilt(6);
  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMove}
      onMouseLeave={tilt.onLeave}
      className="project-visual"
    >
      <SmartImage
        src={project.image}
        alt={`${project.title} conceptual visual`}
        fallback={
          <div className="visual-fallback">
            <div>
              <p className="vf-num">{project.number}</p>
              <p className="kicker mt-2">{project.category}</p>
            </div>
          </div>
        }
      />
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={cn("project-block", `layout-${project.layout}`)}>
      <Visual project={project} />
      <div className="project-copy">
        <p className="kicker text-accent">{project.number}</p>
        <p className="kicker mt-3">{project.category}</p>
        <h3 className="mt-4 font-display text-display-sm leading-[1.05]">
          {project.title}
        </h3>
        <p className="mt-5 max-w-md text-ink-soft">{project.description}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className="btn btn-solid"
          >
            View case study
            <ArrowUpRight className="btn-arrow size-3.5" aria-hidden="true" />
          </Link>
          <a
            href={project.github}
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          {project.live ? (
            <a href={project.live} className="btn btn-ghost" target="_blank" rel="noreferrer">
              Live demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
