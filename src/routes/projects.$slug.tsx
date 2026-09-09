import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { SmartImage } from "@/components/SmartImage";
import { getProject, projects } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.project.title ?? "Project"} — Mowshika Srivarshini`,
      },
      {
        name: "description",
        content: loaderData?.project.description ?? "",
      },
    ],
  }),
  component: ProjectPage,
  notFoundComponent: ProjectNotFound,
});

function ProjectNotFound() {
  return (
    <SiteLayout>
      <section className="wrap section text-center">
        <p className="kicker">404</p>
        <h1 className="mt-4 font-display text-5xl">This case study isn't here.</h1>
        <a href="/#work" className="btn mt-8">
          Back to work
        </a>
      </section>
    </SiteLayout>
  );
}

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const others = projects.filter((item) => item.slug !== project.slug);
  const steps = [
    { label: "Problem", body: project.problem },
    { label: "Approach", body: project.approach },
    { label: "Technology", body: project.technology },
    { label: "Implementation", body: project.implementation },
    { label: "Challenges", body: project.challenges },
    { label: "Solution", body: project.solution },
    { label: "Result", body: project.result },
  ];

  return (
    <SiteLayout>
      <article>
        <header className="wrap section-tight">
          <a href="/#work" className="nav-link gap-2">
            <ArrowLeft className="size-3.5" aria-hidden="true" />
            All work
          </a>
          <p className="kicker mt-8 text-accent">{project.number}</p>
          <p className="kicker mt-3">{project.category}</p>
          <h1 className="mt-4 font-display text-display leading-[1.02]">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">{project.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={project.github} className="btn" target="_blank" rel="noreferrer">
              GitHub
              <ArrowUpRight className="btn-arrow size-3.5" aria-hidden="true" />
            </a>
            {project.live ? (
              <a href={project.live} className="btn btn-solid" target="_blank" rel="noreferrer">
                Live demo
              </a>
            ) : null}
          </div>
        </header>

        <div className="wrap">
          <div className="project-visual">
            <SmartImage
              src={project.image}
              alt={`${project.title} conceptual visual`}
              fallback={
                <div className="visual-fallback min-h-96">
                  <p className="vf-num">{project.number}</p>
                </div>
              }
            />
          </div>
        </div>

        <section className="wrap section-tight">
          <div className="case-flow">
            {steps.map((step) => (
              <div key={step.label} className="case-step">
                <p className="kicker">{step.label}</p>
                <p className="max-w-2xl text-lg leading-relaxed text-ink-soft">{step.body}</p>
              </div>
            ))}
            <div className="case-step">
              <p className="kicker">Architecture</p>
              <ol className="arch-list">
                {project.architecture.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
            <div className="case-step">
              <p className="kicker">Stack</p>
              <ul className="flex flex-wrap gap-2">
                {project.technologies.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {project.detailImage ? (
          <div className="wrap pb-16">
            <div className="project-visual">
              <SmartImage
                src={project.detailImage}
                alt={`${project.title} process visual`}
                fallback={<div className="visual-fallback min-h-72" />}
              />
            </div>
          </div>
        ) : null}

        <section className="wrap section-tight border-t border-line">
          <p className="kicker">Continue</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {others.map((item) => (
              <Link
                key={item.slug}
                to="/projects/$slug"
                params={{ slug: item.slug }}
                className="block border border-line bg-paper p-6 transition-colors hover:border-accent"
              >
                <p className="kicker text-accent">{item.number}</p>
                <h2 className="mt-3 font-display text-2xl">{item.title}</h2>
                <p className="mt-2 text-sm text-muted">{item.category}</p>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </SiteLayout>
  );
}
