import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl tracking-tight">{site.shortName}</p>
          <p className="kicker mt-2">AI · Software · Data</p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer">
          <a href={site.github} target="_blank" rel="noreferrer" className="nav-link">
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="nav-link">
            LinkedIn
          </a>
          <a href={`mailto:${site.email}`} className="nav-link">
            Email
          </a>
          <Link to="/resume" className="nav-link">
            Resume
          </Link>
        </nav>
      </div>
      <div className="wrap mt-8 flex flex-col gap-2 text-sm text-muted md:flex-row md:justify-between">
        <p>© 2026 Mowshika Srivarshini</p>
        <p className="script-label text-base">Built with curiosity & code.</p>
      </div>
    </footer>
  );
}
