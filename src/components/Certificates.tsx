import { certificates } from "@/data/certificates";
import { InView } from "@/components/InView";
import { SmartImage } from "@/components/SmartImage";

export function Certificates() {
  return (
    <section id="certificates" className="section-tight">
      <div className="wrap">
        <InView>
          <p className="kicker">Paper trail</p>
          <h2 className="mt-4 font-display text-display-md">
            Certificates
          </h2>
          <p className="mt-4 max-w-xl text-ink-soft">
            A quiet shelf for credentials — images can be swapped in later without changing the layout.
          </p>
        </InView>
        <div className="cert-grid mt-10">
          {certificates.map((item, index) => (
            <InView key={item.id} delay={index * 50}>
              <article className="cert-card">
                <SmartImage
                  src={item.image}
                  alt={`${item.title} certificate`}
                  fallback={
                    <div className="visual-fallback min-h-40">
                      <p className="kicker">Certificate</p>
                    </div>
                  }
                />
                <div className="p-4">
                  <p className="kicker">{item.date}</p>
                  <h3 className="mt-2 font-display text-xl leading-tight">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted">{item.issuer}</p>
                  {item.credentialUrl ? (
                    <a
                      href={item.credentialUrl}
                      className="nav-link mt-2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Credential
                    </a>
                  ) : null}
                </div>
              </article>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}
