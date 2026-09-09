import { education, experience } from "@/data/site";
import { InView } from "@/components/InView";

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="wrap grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <InView>
          <p className="kicker">Professional</p>
          <h2 className="mt-4 font-display text-display-md">Experience</h2>
          <article className="mt-10 border border-line bg-paper p-8">
            <p className="kicker text-accent">{experience.duration}</p>
            <h3 className="mt-4 font-display text-3xl leading-tight">
              {experience.role}
            </h3>
            <p className="mt-1 text-lg text-ink-soft">{experience.company}</p>
            <p className="mt-6 text-ink-soft">{experience.summary}</p>
            <p className="kicker mt-8">Project · {experience.project}</p>
            <ul className="mt-5 space-y-3 text-ink-soft">
              {experience.highlights.map((item) => (
                <li key={item} className="grid grid-cols-[10px_1fr] gap-3">
                  <span className="mt-2 size-1.5 rotate-45 bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ul className="mt-8 flex flex-wrap gap-2">
              {experience.stack.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </InView>

        <InView delay={80}>
          <p className="kicker">Formation</p>
          <h2 className="mt-4 font-display text-display-md">Education</h2>
          <ol className="timeline mt-10">
            {education.map((item) => (
              <li key={item.degree} className="timeline-item">
                <p className="kicker">{item.years}</p>
                <div>
                  <h3 className="font-display text-2xl">{item.degree}</h3>
                  <p className="mt-2 text-ink-soft">{item.school}</p>
                  <p className="mt-3 kicker text-accent">{item.metric}</p>
                </div>
              </li>
            ))}
          </ol>
        </InView>
      </div>
    </section>
  );
}
