import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { useScrolled } from "@/lib/hooks";
import { cn } from "@/lib/cn";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/#updates", label: "Updates" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="announce">Open to internships · collaborations · intelligent software</div>
      <header className={cn("site-nav", scrolled && "is-scrolled")}>
        <div className="wrap flex items-center justify-between gap-4 py-3">
          <Link
            to="/"
            className="font-display text-xl tracking-tight text-ink md:text-2xl"
            aria-label="Mowshika home"
          >
            {site.shortName}
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/resume" className="btn hidden sm:inline-flex">
              Resume
              <ArrowUpRight className="btn-arrow size-3.5" aria-hidden="true" />
            </Link>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div id="mobile-nav" className="mobile-drawer lg:hidden" role="dialog" aria-label="Menu">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <Link to="/resume" className="btn mt-6 w-fit" onClick={() => setOpen(false)}>
            Resume
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </Link>
        </div>
      ) : null}
    </>
  );
}
