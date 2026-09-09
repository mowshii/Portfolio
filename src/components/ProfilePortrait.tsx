import { useEffect, useState } from "react";
import { site } from "@/data/site";

export function ProfilePortrait() {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const image = new Image();
    image.onload = () => setSrc(site.profileImage);
    image.onerror = () => setSrc(null);
    image.src = site.profileImage;
  }, []);

  if (src) {
    return (
      <img
        src={src}
        alt="Mowshika Srivarshini, software developer"
        className="object-cover"
        width={720}
        height={960}
      />
    );
  }

  return (
    <div className="portrait-fallback" aria-label="Portrait space reserved for Mowshika's photograph">
      <div className="portrait-mono">
        <p className="letters">{site.monogram}</p>
        <p className="hint">Studio portrait</p>
      </div>
    </div>
  );
}
