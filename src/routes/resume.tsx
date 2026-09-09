import { createFileRoute } from "@tanstack/react-router";
import { Printer } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { certificates } from "@/data/certificates";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { achievements, education, experience, site } from "@/data/site";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [{ title: "Resume — Mowshika Srivarshini" }],
  }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <SiteLayout>
      <div className="wrap section-tight no-print flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="kicker">Curriculum vitae</p>
          <h1 className="mt-3 font-display text-5xl">Resume</h1>
        </div>
        <button type="button" className="btn" onClick={() => window.print()}>
          Download / Print
          <Printer className="btn-arrow size-3.5" aria-hidden="true" />
        </button>
      </div>

      <article className="resume-sheet">
        <header className="flex flex-col gap-4 border-b border-line pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-4xl tracking-tight">{site.name}</p>
            <p className="mt-2 text-sm tracking-[0.14em] uppercase text-muted">
              Software Developer · AI & Machine Learning
            </p>
          </div>
          <ul className="text-sm text-ink-soft">
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a href={site.github}>{site.github.replace("https://", "")}</a>
            </li>
            <li>Coimbatore, India</li>
          </ul>
        </header>

        <section className="mt-8">
          <h2 className="kicker">Profile</h2>
          <p className="mt-3 max-w-3xl text-ink-soft">{site.tagline}</p>
        </section>

        <section className="mt-8">
          <h2 className="kicker">Experience</h2>
          <div className="mt-3 flex flex-col gap-1 md:flex-row md:justify-between">
            <p className="font-medium">
              {experience.role} — {experience.company}
            </p>
            <p className="text-sm text-muted">{experience.duration}</p>
          </div>
          <p className="mt-2 text-sm text-ink-soft">{experience.summary}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-ink-soft">
            {experience.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="kicker">Selected projects</h2>
          <ul className="mt-3 space-y-4">
            {projects.map((project) => (
              <li key={project.slug}>
                <p className="font-medium">{project.title}</p>
                <p className="text-xs tracking-[0.14em] uppercase text-muted">
                  {project.category}
                </p>
                <p className="mt-1 text-sm text-ink-soft">{project.description}</p>
                <p className="mt-1 text-xs text-muted">{project.technologies.join(" · ")}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="kicker">Education</h2>
          <ul className="mt-3 space-y-3">
            {education.map((item) => (
              <li key={item.degree} className="flex flex-col md:flex-row md:justify-between">
                <div>
                  <p className="font-medium">{item.degree}</p>
                  <p className="text-sm text-ink-soft">{item.school}</p>
                </div>
                <p className="text-sm text-muted">
                  {item.years} · {item.metric}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="kicker">Skills</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {skillGroups.map((group) => (
              <p key={group.id} className="text-sm text-ink-soft">
                <span className="font-medium text-ink">{group.label}: </span>
                {group.items.join(", ")}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="kicker">Recognition</h2>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            {achievements.map((item) => (
              <li key={item.number}>
                <span className="font-medium text-ink">{item.title}. </span>
                {item.detail}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="kicker">Certificates</h2>
          <ul className="mt-3 space-y-1 text-sm text-ink-soft">
            {certificates.map((item) => (
              <li key={item.id}>
                {item.title} — {item.issuer} ({item.date})
              </li>
            ))}
          </ul>
        </section>
      </article>
    </SiteLayout>
  );
}
