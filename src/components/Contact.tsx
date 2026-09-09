import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="contact-band">
      <div className="wrap">
        <p className="kicker">Next</p>
        <h2 className="mt-5 font-display text-contact leading-[0.98]">
          Let's build something
          <br />
          meaningful.
        </h2>
        <p className="mt-8 max-w-xl text-lg text-beige">
          Open to internship opportunities, software projects, collaborations and conversations around AI and technology.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={`mailto:${site.email}`} className="btn btn-solid">
            Say hello
            <ArrowUpRight className="btn-arrow size-3.5" aria-hidden="true" />
          </a>
          <Link to="/resume" className="btn">
            Download resume
            <ArrowUpRight className="btn-arrow size-3.5" aria-hidden="true" />
          </Link>
        </div>
        <ul className="mt-12 flex flex-col gap-2 text-sm tracking-[0.12em] uppercase text-metal sm:flex-row sm:gap-8">
          <li>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </li>
          <li>
            <a href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
