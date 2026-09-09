import { achievements } from "@/data/site";
import { InView } from "@/components/InView";

export function Achievements() {
  return (
    <section className="section-tight">
      <div className="wrap">
        <InView>
          <p className="kicker">Notes in the margin</p>
          <h2 className="mt-4 font-display text-display-md">
            Recognition & Achievements
          </h2>
        </InView>
        <div className="achieve-grid mt-10">
          {achievements.map((item, index) => (
            <InView key={item.number} delay={index * 60}>
              <article className="achieve-card">
                <p className="kicker text-accent">{item.number}</p>
                <h3 className="mt-5 font-display text-2xl">{item.title}</h3>
                <p className="mt-3 text-ink-soft">{item.detail}</p>
              </article>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}
