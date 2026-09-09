import { exploring } from "@/data/site";
import { InView } from "@/components/InView";

export function Exploring() {
  return (
    <section className="section-tight bg-sand/60">
      <div className="wrap">
        <InView>
          <p className="kicker">Alive on the desk</p>
          <h2 className="mt-4 font-display text-display-md">
            Currently Exploring
          </h2>
        </InView>
        <InView>
          <ul className="float-tags mt-10">
            {exploring.map((item) => (
              <li key={item} className="float-tag">
                {item}
              </li>
            ))}
          </ul>
        </InView>
      </div>
    </section>
  );
}
