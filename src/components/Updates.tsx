import { updates } from "@/data/updates";
import { InView } from "@/components/InView";

export function Updates() {
  return (
    <section id="updates" className="section">
      <div className="wrap">
        <InView>
          <p className="kicker">Journal</p>
          <h2 className="mt-4 font-display text-display-md">
            Latest Updates.
          </h2>
        </InView>
        <div className="mt-10">
          {updates.map((item, index) => (
            <InView key={item.id} delay={index * 50}>
              <article className="update-row">
                <p className="kicker">{item.date}</p>
                <p className="kicker text-accent">{item.category}</p>
                <div>
                  <h3 className="font-display text-2xl">{item.title}</h3>
                  <p className="mt-2 max-w-xl text-ink-soft">{item.description}</p>
                </div>
              </article>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}
