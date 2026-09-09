import { site } from "@/data/site";

export function ConnectBar() {
  return (
    <div className="connect-bar">
      <div className="wrap">
        <p className="kicker mb-4 text-center">Connect with me</p>
        <div className="connect-row">
          <a href={site.github} className="btn btn-ghost" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={site.linkedin} className="btn btn-ghost" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${site.email}`} className="btn">
            Book a call
          </a>
        </div>
      </div>
    </div>
  );
}
