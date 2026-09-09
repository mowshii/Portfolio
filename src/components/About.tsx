import { site } from "@/data/site";
import { InView } from "@/components/InView";
import { ProfilePortrait } from "@/components/ProfilePortrait";

export function About() {
  return (
    <section id="about" className="section">
      <div className="wrap about-grid">
        <InView>
          <p className="kicker">The story so far</p>
          <h2 className="mt-4 font-display text-display-lg leading-[1.02]">
            Hello, I'm Mowshika.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            {site.aboutLead}
          </p>
          <p className="mt-6 max-w-xl text-ink-soft">
            The work sits at the meeting point of software and intelligence — systems that read documents, reason over data, and still feel like products a person would actually use.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {site.aboutSpans.map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
            ))}
          </ul>
        </InView>
        <InView delay={80}>
          <div className="hero-portrait mx-auto max-w-sm">
            <ProfilePortrait />
          </div>
        </InView>
      </div>
    </section>
  );
}
