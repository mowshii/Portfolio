import { whatIBuild } from "@/data/site";
import { InView } from "@/components/InView";
import { useTilt } from "@/lib/hooks";

function BuildCard({
  number,
  title,
  copy,
}: {
  number: string;
  title: string;
  copy: string;
}) {
  const tilt = useTilt(8);
  return (
    <article
      ref={tilt.ref}
      onMouseMove={tilt.onMove}
      onMouseLeave={tilt.onLeave}
      className="build-card"
    >
      <p className="kicker text-accent">{number}</p>
      <h3 className="mt-6 font-display text-3xl tracking-tight">{title}</h3>
      <p className="mt-4 max-w-sm text-ink-soft">{copy}</p>
    </article>
  );
}

export function WhatIBuild() {
  return (
    <section className="section-tight bg-sand/50">
      <div className="wrap">
        <InView>
          <p className="kicker">Practice</p>
          <h2 className="mt-4 font-display text-display-md">What I Build</h2>
        </InView>
        <div className="build-grid mt-10">
          {whatIBuild.map((item, index) => (
            <InView key={item.number} delay={index * 70}>
              <BuildCard {...item} />
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}
