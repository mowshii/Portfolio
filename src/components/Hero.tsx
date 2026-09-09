import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { site } from "@/data/site";
import { HeroScene } from "@/components/HeroScene";
import { ProfilePortrait } from "@/components/ProfilePortrait";
import { SmartImage } from "@/components/SmartImage";

export function Hero() {
  const [speech, setSpeech] = useState(false);

  return (
    <section className="wrap hero-grid" aria-labelledby="hero-heading">
      <div>
        <p className="kicker reveal">Software developer · AI · Data</p>
        <h1
          id="hero-heading"
          className="reveal reveal-delay-1 mt-5 font-display text-display leading-[0.98] tracking-tight"
        >
          Building <em className="script-label not-italic text-accent">intelligent</em>
          <br />
          software for
          <br />
          real-world problems.
        </h1>
        <p className="reveal reveal-delay-2 mt-7 max-w-lg text-lg leading-relaxed text-ink-soft">
          {site.tagline}
        </p>
        <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-3">
          <a href="#work" className="btn btn-solid">
            Explore my work
            <ArrowDown className="btn-arrow size-3.5" aria-hidden="true" />
          </a>
          <Link to="/resume" className="btn">
            Download resume
            <ArrowUpRight className="btn-arrow size-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="hero-visual reveal reveal-delay-2">
        <p className="script-label absolute -top-1 right-2 z-10 text-xl md:text-2xl">
          your ai companion
        </p>
        <div className="hero-stack">
          <div className="hero-shot">
            <SmartImage
              src="/images/hero/hero.jpg"
              alt="Editorial studio desk with notebook, laptop and plants"
              className="h-full w-full object-cover"
              fallback={<div className="visual-fallback h-full min-h-80" />}
            />
          </div>
          <div className="hero-portrait">
            <ProfilePortrait />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-ink/10" />
          </div>
        </div>
        <div className="orbit top-[18%] right-[8%] size-40 opacity-70" />
        <div
          className="bot-stage"
          role="button"
          tabIndex={0}
          aria-label="Mowshika's AI sidekick. Activate to hear a greeting."
          onClick={() => setSpeech(true)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setSpeech((value) => !value);
            }
          }}
        >
          <span className="bot-tip">Hi, I'm Mowshika's AI sidekick.</span>
          {speech ? (
            <span className="speech" role="status">
              Hi! Explore Mowshika's work ↓
            </span>
          ) : null}
          <HeroScene speaking={speech} onActivate={() => setSpeech(true)} />
        </div>
      </div>
    </section>
  );
}
