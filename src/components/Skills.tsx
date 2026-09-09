import { useState } from "react";
import { skillGroups } from "@/data/skills";
import { InView } from "@/components/InView";
import { cn } from "@/lib/cn";

export function Skills() {
  const [active, setActive] = useState(skillGroups[0]?.id ?? "programming");
  const group = skillGroups.find((item) => item.id === active) ?? skillGroups[0];

  return (
    <section id="skills" className="section bg-paper">
      <div className="wrap">
        <InView>
          <p className="kicker">Toolkit</p>
          <h2 className="mt-4 font-display text-display-md">
            Technologies I Work With.
          </h2>
        </InView>

        <div
          className="mt-10 flex flex-wrap gap-1"
          role="tablist"
          aria-label="Skill categories"
        >
          {skillGroups.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={item.id === active}
              className={cn("skill-tab", item.id === active && "is-active")}
              onClick={() => setActive(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {group ? (
          <ul
            className="mt-8 flex flex-wrap gap-3"
            role="tabpanel"
            aria-label={group.label}
          >
            {group.items.map((item) => (
              <li key={item}>
                <span className="skill-chip">{item}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
